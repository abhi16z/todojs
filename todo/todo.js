import util from './util';
import F from './framework';

let addTaskElement = document.getElementById('addItemTextbox');
let errorBlock = document.getElementById('errorBlock');
let renderTargetElement = document.getElementById('displayRenderedItems');
let addItemBlock = document.getElementById('addItems');
let displayTotalNumberOfTasksBlock = document.getElementById('displayTotalNumberOfTasks');


class Todo {
    constructor(viewState) {
        this.state={hasNewTaskError:false}
        this.selectedElementIds=[];
    }

    onTextBlur() {
        this.state.hasNewTaskError = util.taskDescriptionValidator(addTaskElement.value) ? false : true;

        if (this.state.hasNewTaskError) {
            errorBlock.style.display = 'block';
        }
        else {
            errorBlock.style.display = 'none';
        }
    }

    onAddTask() {
        if (!this.state.hasNewTaskError && addTaskElement.value) {
            F.addTask(addTaskElement.value);
            addTaskElement.value = ''; //input element will become empty
            this.renderItems();
        }
        else {
            errorBlock.style.display = 'block';
        }
    }

    onReset() {
        F.onReset();
        this.renderItems();
    }

    onUndo() {
        F.onUndo();
        this.renderItems();
    }

    onCheckboxSelect() {
        let id=event.target.parentElement.parentElement.id;

        if (event.target.checked) {
            this.selectedElementIds.push(id);
        }
        else {
            this.selectedElementIds = this.selectedElementIds.filter(
                elementId => { return elementId !== id; }
            );
        }
    }

    onRemoveTask() {
        (arguments.length) ? F.onRemoveTask(this.selectedElementIds) : F.onRemoveTask([event.target.parentElement.parentElement.id]);
        this.selectedElementIds=[];
        this.renderItems();
    }

    onCompleteTask() {
        (arguments.length) ? F.onCompleteTask(this.selectedElementIds) : F.onCompleteTask([event.target.parentElement.id]);
        this.selectedElementIds=[];
        this.renderItems();
    }

    onSortByDate() {
        if (this.isViewDescending) {
            this.taskArray.sort((task1, task2) => {
                return task1.time - task2.time;
            });
            this.isViewDescending = false;
        }
        else {
            this.taskArray.sort((task1, task2) => {
                return task2.time - task1.time;
            });
            this.isViewDescending = true;
        }
        this.renderItems();
    }

    onSearch() {
        if(!this.taskArray){
            return;
        }
        let listForSearch = this.taskArray.filter(
            task => {
                let desc = task.description.toString();
                return desc.indexOf(event.target.value) > -1
            }
        );

        this.renderItems(listForSearch);
    }

    renderItems(listForSearch) {
        F.saveData();
        this.taskArray = F.getTasks();
        renderTargetElement.innerHTML = '';

        if (listForSearch) {
            listForSearch.forEach(task => {
                let taskElement = util.createItemElement(task);
                renderTargetElement.appendChild(taskElement);
            });
        }
        else {
            this.taskArray.forEach(task => {
                let taskElement = util.createItemElement(task);
                renderTargetElement.appendChild(taskElement);
            });
        }
        displayTotalNumberOfTasksBlock.innerHTML='Total number of tasks: '+this.taskArray.length;
        addItemBlock.style.display = (this.taskArray.length === 50) ? 'none' : 'block';
        this.selectedElementIds=[];
    }

}

window.app = new Todo();

(function(){
    window.app.renderItems();
})();
