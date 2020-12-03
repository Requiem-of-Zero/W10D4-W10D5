import * as APIUTIL from '../util/todo_api_util';
export const RECEIVE_TODO = "RECEIVE_TODO";
export const RECEIVE_TODOS = "RECEIVE_TODOS";

export const receiveTodos = todos => ({
  type: RECEIVE_TODOS,
  todos
//   arguments array
})

export const receiveTodo = todo => ({
  type: RECEIVE_TODO,
  todo
})

export const retrieveTodos = () => (dispatch) => {
  APIUTIL.fetchTodos().then( todos => 
    dispatch(receiveTodos(todos))
  )
}

export const createTodo = (todo) => (dispatch) => {
  APIUTIL.createTodo(todo).then( todo => 
    dispatch(receiveTodo(todo))
  )
}
