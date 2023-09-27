import { useState } from "react";
import { AddToDoAction, RemovetodoAction } from "./Actions";
import { useDispatch, useSelector } from "react-redux";

function TodoMain() {
  const [todo, setTodo] = useState("");

  const dispatch = useDispatch();
  const Todo = useSelector((state) => state.Todo);

  const todos = Todo;

  const handleSubmit = (e) => {
    console.log(todo);
    e.preventDefault();
    dispatch(AddToDoAction(todo));
  };

  const RemoveHandler = (t) => {
    dispatch(RemovetodoAction());
    console.log(t);
  };

  return (
    <div>
      <header>
        <form onSubmit={handleSubmit}>
          <div className="divofheader">
            <h1>TO Do List</h1>
            <input
              placeholder="Enter todo"
              onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit">Add</button>
          </div>
        </form>
        <ul>
          {todos &&
            todos.map((t) => (
              <li key={t.id}>
                <span>{t.todo}</span>
                <button onClick={() => RemoveHandler(t)}>remove</button>
              </li>
            ))}
        </ul>
      </header>
    </div>
  );
}

export default TodoMain;
