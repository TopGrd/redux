import React, {Component} from 'react';
import {addTodo, completeTodo, deleteTodo, clearTodo} from '../actions/actions';
import {connect} from 'react-redux';
const mapStateToProps = (state) => {
  return {todos: state.todoAppReducer.todo.items}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSubmit: (message) => {
      dispatch(addTodo(message));
    },
    onDeleteClick: (index) => {
      dispatch(deleteTodo());
    },
    onCompletedClick: (index) => {
      dispatch(completeTodo(index));
    },
  }
}

class ToDoForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: ''
    }
  }

  onFormSubmit(e) {
    e.preventDefault();
    const node = this.refs.input;
    const text = node.value.trim();
    this.props.onFormSubmit(text);
    this.setState({message: ''});
  }

  onMessageChange(e) {
    let message = e.target.value;
    this.setState({message: message});
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit.bind(this)}>
        <input type="text" placeholder="Todo..." onChange={this.onMessageChange.bind(this)} value={this.state.message} ref="input"/>
        <button type="submit" value="Add">add</button>
      </form>
    )
  }
}

class ToDoItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <li>
        <button onClick={()=>this.props.onDeleteClick()}>delete</button>

        <a href="#" onClick={()=>this.props.onCompletedClick()}>{this.props.message}</a>
      </li>
    )
  }
}

class ToDoList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let itemLi = this.props.todos.map((item, index) => {
      return (
        <ToDoItem
        key={index} index={index} message={item.message} completed={item.completed}
        onDeleteClick={() => this.props.onDeleteClick(index)} onCompletedClick={() => this.props.onCompletedClick(index)}/>)
    });
    return (
      <ol>
        {itemLi}
      </ol>
    )
  }
}

class ToDoApp extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {todos, onSubmit, onDeleteClick, onCompletedClick,} = this.props;
    return (
      <div>
        <h1>Todo</h1>
        <ToDoForm onFormSubmit={onSubmit}/><hr/>
        <ToDoList todos={todos} onDeleteClick={onDeleteClick} onCompletedClick={onCompletedClick}/>
      </div>
    )
  }
}

const ToDoAppContainer = connect(mapStateToProps, mapDispatchToProps)(ToDoApp);

export default ToDoAppContainer;
