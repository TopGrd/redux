let addTodo = function addTodo(message) {
  return {
    type: 'ADD',
    message: message,
    completed: false
  }
}
let completeTodo = function completeTodo(index) {
  return {
    type: 'COMPLETE',
    index: index
  }
}

let deleteTodo = function deleteTodo(index) {
  return {
    type: 'DELETE',
    index: index
  }
}

let clearTodo = function clearTodo() {
  return {
    type: 'CLEAR'
  }
}
export {addTodo, completeTodo, deleteTodo, clearTodo};
