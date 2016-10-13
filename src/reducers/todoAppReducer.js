let todoAppReducer = function todoApp(state, action) {
  switch (action.type) {
    case 'ADD':
      var items = [].concat(state.todo.items);
      return Object.assign({}, state, {
        todo: {
          items: items.concat([{
            message: action.message,
            completed: false
          }])
        }
      });
    case 'COMPLETE':
      items = [].concat(state.todo.items);
      items[action.index].completed = true;
      return Object.assign({}, state, {
        todo: {
          items: items
        }
      });
    case 'DELETE':
      items = [].concat(state.todo.items);

      items.splice(action.index, 1);

      return Object.assign({}, state, {
        todo: {
          items: items
        }
      });

    case 'CLEAR':
      return Object.assign({}, state, {
        todo: {
          items: []
        }
      });
    default:
      return state;
  }
};

export default todoAppReducer;
