import React from 'react';
import ReactDOM from 'react-dom';
import configStore from './store/store';
import {receiveTodos, receiveTodo, retrieveTodos} from './actions/todo_actions';
import Root from './components/root'

document.addEventListener("DOMContentLoaded", () => {
  const store = configStore()

  window.store = store
  window.receiveTodos = receiveTodos
  window.receiveTodo = receiveTodo
  window.retrieveTodos = retrieveTodos
  
  ReactDOM.render(<Root />, document.getElementById("root"));
});


