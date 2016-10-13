import React, {Component} from 'react';
import store from '../store/todoStore';
import {addTodo, completeTodo, deleteTodo, clearTodo,} from '../actions/actions';

class ToDoForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: ''
    }
  }

  onSubmit(e) {
    e.preventDefault();
    store.dispatch(addTodo(this.state.message));
    this.setState({message: ''});
  }

  onMessageChange(e) {
    console.log(e);
    let message = e.target.value;
    this.setState({
      message: message
    });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <input type="text" placeholder="Todo..." onChange={this.onMessageChange.bind(this)} value={this.state.message} />
        <button type="submit" value="Add">add</button>
      </form>
    )
  }
}

class ToDoItem extends Component{
  onDeleteClick(e) {
    store.dispatch(deleteTodo(this.props.index));
  }

  onCompletedClick(e) {
    store.dispatch(completeTodo(this.props.index));
  }

  render() {
    return (
      <li>
        <a href="#" onClick={this.onDeleteClick.bind(this)}>[x]</a>
        <a href="#" onClick={this.onCompletedClick.bind(this)}>{this.props.message}</a>
      </li>
    )
  }
}

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  componentWillMount() {
    store.subscribe(() => {
      let state = store.getState();
      this.setState({
        items: state.todo.items
      });
    });
  }

  render() {
    let itemLi = this.state.items.map(function (item, index) {
      return (
        <ToDoItem index={index} message={item.message} completed={item.completed} />
      )
    });
    return (
      <ol>
        {itemLi}
      </ol>
    )
  }
}

export default class ToDoApp extends Component {
  render() {
    return (
      <div>
        <h1>Todo</h1>
        <ToDoForm /><hr />
        <ToDoList />
      </div>
    )
  }
}
