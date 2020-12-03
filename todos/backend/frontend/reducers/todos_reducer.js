import {RECEIVE_TODOS, RECEIVE_TODO} from '../actions/todo_actions'

const todoReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    const newState = Object.assign({}, oldState);

    switch (action.type){
        case RECEIVE_TODOS: 
            const todoObj = {}
            action.todos.forEach(todo => {
                todoObj[todo.id] = todo
            })
            return todoObj;
        // receive todos and populate the store
        case RECEIVE_TODO:
            newState[action.todo.id] = action.todo;
        // receive a single todo and either add or update a single todo in the store.
            return newState;
        default: 
            return oldState;
    }
}

export default todoReducer;