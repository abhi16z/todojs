import Framework from './todo/framework';
import Store from './todo/store';

let todoMock = jest.mock('./todo/todo.js');
// import Todo from './todo/todo';

describe('Unit test cases for TODO with jest', ()=>{
    it('will test just the configuration of Todo app', ()=>{
        // var todo = new Todo();
        console.log(todoMock);
    });
});


describe('Unit test cases for TODO with jest', ()=>{
    let initialState,state, prevState,initialTasks, tasks, prevTasks, spy;
    
    beforeEach(()=>{
        initialState = Framework.initialState;
        state= Framework.state;
        prevState= Framework.prevState;
        initialTasks = initialState.tasks;
        tasks= state.tasks;
        prevTasks = prevState.tasks;
        spy = jest.spyOn(Framework, 'setStoreStates');
    });

    afterEach(()=>{
        spy.mockRestore();
    });

    //------------------------------------------------------------------------------------------------------

    it('is test case for addTask in Framework', ()=>{
        expect(tasks.length).toBe(0);
        
        Framework.addTask('first task');

        expect(tasks.length).toBe(1);
        expect(spy).toHaveBeenCalled();
        expect(spy.mock.calls.length).toEqual(1);
    });


    it('will test onReset in framework', ()=>{
        expect(spy.mock.calls.length).toBe(0);

        Framework.onReset();

        expect(spy.mock.calls.length).toBe(2);
        expect(spy.mock.calls[1][0]).toBe(initialState);
        expect(spy.mock.calls[1][1]).toBe('state');
    });


    it('will test OnUndo in framework', ()=>{
        expect(spy.mock.calls.length).toBe(0);

        Framework.onUndo();
        
        expect(spy).toHaveBeenCalled();
        expect(spy.mock.calls[0][1]).toBe('state');
        expect(spy).toHaveBeenCalledWith(prevState, 'state');

    });

    it('will test onCompleteTask in framework', ()=>{
        Framework.addTask('drink tea');
        Framework.addTask('drink Coffee');

        expect(tasks[1].isCompleted).toBe(false);

        Framework.onCompleteTask([tasks[1].id]);

        expect(spy).toHaveBeenCalled();
        expect(tasks[1].isCompleted).toBe(true);

    });

    it('will test onRemoveTask in framework', ()=>{
        expect(Framework.getTasks().length).toBe(3);

        Framework.onRemoveTask([tasks[1].id]);

        expect(Framework.getTasks().length).toBe(2);
    });

    it('will test getTasks in Framework', ()=>{
        let desc = 'task first task for testing getTasks';
        Framework.addTask(desc);
        let resultOfGetTasks = Framework.getTasks();
        let lastIndex = resultOfGetTasks.length-1;

        expect(resultOfGetTasks).toEqual(expect.arrayContaining([]));
        expect(resultOfGetTasks[lastIndex].description).toBe(desc);
    });

    it('will test saveData in framework', ()=>{
        Framework.addTask('task first task for testing saveData');
        Framework.saveData();
        let lengthOfDataBefore = JSON.parse(localStorage.todoStoredDataInitialState).tasks.length;

        Framework.addTask('task second task for testing saveData');
        Framework.saveData();

        let lengthOfDataAfter = JSON.parse(localStorage.todoStoredDataInitialState).tasks.length;

        expect(lengthOfDataAfter).toBeGreaterThan(lengthOfDataBefore);

    });

});


/*

it('will test onReset in framework', ()=>{
        
    });

*/
