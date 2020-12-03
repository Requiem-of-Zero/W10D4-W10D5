import React from 'react';
import TodoForm from './todo_form'
import TodoListItem from './todo_list_item'

class TodoList extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.retrieveTodos()
  }

  render(){
    const {todos, createTodo} = this.props;

    const todoItems = todos.map(todo => (
      <TodoListItem key={todo.id} todo={todo} receiveTodo={receiveTodo}/>
      ))
      
    return(
      <div>
        <ul>
          { todoItems }
        </ul>
        <TodoForm createTodo={createTodo}/>
      </div>
    )
  }
}

export default TodoList;