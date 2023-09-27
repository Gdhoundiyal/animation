export const AddToDoAction = (todo) => (dispatch, getState) => {
  const {
    Todo: { todos },
  } = getState();

  console.log(todos);
  const hasTodo = todos.find((i) => i.todo === todo);
  console.log(hasTodo);

  if (!hasTodo && todo !== "") {
    console.log(todo);
    dispatch({
      type: "AddToDo",
      payload: [{ id: todo, todo }, ...todos],
    });
  }
};

export const RemovetodoAction = (todo) => (dispatch, getState) => {
  const {
    Todo: { todos },
  } = getState();

  dispatch({
    type: "RemoveToDo",
    payload: todos.filter((t) => t.id !== todo.id),
  });
};
