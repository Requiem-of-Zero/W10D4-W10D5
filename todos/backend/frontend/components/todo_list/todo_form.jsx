import React from 'react';
import { uniqueId } from '../../util/id_generator';

class TodoForm extends React.Component {
  constructor(props){
    super(props);
    this.state={
      title: "",
      body: "",
      done: false
    }

    // this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleBodyChange(e){
    this.setState({body: e.target.value});
  }

  handleTitleChange(e){
    this.setState({title: e.target.value});
  }

  handleClick(e){
    e.preventDefault();
    const todo = Object.assign({}, this.state, {id: uniqueId()});
    this.props.createTodo(todo);
    this.setState({
      title: "",
      body: ""
    })
  }

  render(){
    return(
      <div>
        <form className="form-wrapper" onSubmit={this.handleClick}>
          <label> Title:
            <input type="text" value={this.state.title} placeholder="Todo Title" onChange={(e) => this.handleTitleChange(e)} />
          </label>
          <br/>
          <label> Context:
            <input type="text" value={this.state.body} placeholder="Todo context" onChange={(e) => this.handleBodyChange(e)} />
          </label>
          <br/>
          <button className='create-button'>Create Todo</button>
        </form>
      </div>
    )
  }
}

export default TodoForm;