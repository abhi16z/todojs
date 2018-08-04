import util from './util';
import Store from './store';

class Framework {
    constructor(initialState, state, prevState) {
        this.initialState = initialState;
        this.state = state;
        this.state.tasks = [...initialState.tasks];
        this.prevState = prevState;
    }

    saveData(){
        console.log('save data');
        Store.setTodoStoredData(this.state);
    }

    getTasks() {
        return this.state.tasks;
    }

    setStoreStates(source, targetName) {
        let sourceCopy = util.shallowCopy(source);
        sourceCopy.tasks = [...source.tasks];
        sourceCopy.tasks.forEach(
            (task, index) => {
                sourceCopy.tasks[index] = util.shallowCopy(task);
            }
        );

        (targetName === 'state' ) ? this.state = sourceCopy : this.prevState=sourceCopy;
    }

    addTask(desc) {
        let task = {
            id: this.state.tasks.length + 'itemContainer',
            description: desc,
            time: new Date(),
            isCompleted: false
        };
        this.setStoreStates(this.state, 'prevState');
        this.state.tasks.push(task);
    }

    onReset() {
        this.setStoreStates(this.state, 'prevState');
        this.setStoreStates(this.initialState, 'state');
    }

    onUndo() {
        this.setStoreStates(this.prevState, 'state');
    }

    onCompleteTask(tasksToBeCompleted) {
        this.setStoreStates(this.state, 'prevState');
        this.state.tasks = this.state.tasks.map((task) => {
            (tasksToBeCompleted.indexOf(task.id) > -1) ? task.isCompleted = true : void (0);
            return task;
        });
    }

    onRemoveTask(tasksToBeRemoved) {
        this.setStoreStates(this.state, 'prevState');
        this.state.tasks = this.state.tasks.filter((task) => {
            return tasksToBeRemoved.indexOf(task.id) === -1;
        });
    }
}

let initialState = Store.getTodoStoredData() || { maxTasks: 10, numberOfTasks: 0, tasks: [] };
let state = util.shallowCopy(initialState);
let prevState =util.shallowCopy(initialState);
let framework = new Framework(initialState, state, prevState);

export default framework;
