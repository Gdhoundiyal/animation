// for todos
const TodoReducer = (state = { todos: [] }, action) => {
  switch (action.type) {
    case "AddToDo":
      return { todos: action.payload };
    case "RemoveToDo":
      return { todos: action.payload };
    default:
      return state;
  }
};
export default TodoReducer;
