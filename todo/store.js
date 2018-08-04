export default class Store {
    static getTodoStoredData() {
        return JSON.parse(localStorage.getItem('todoStoredDataInitialState'));
    }

    static setTodoStoredData(state) {
        localStorage.setItem('todoStoredDataInitialState', JSON.stringify(state));
    }
}
