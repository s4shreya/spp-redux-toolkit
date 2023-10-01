import { useSelector, useDispatch } from "react-redux";

import { deleteTodo } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  //   const removeTodoHandler = event => {
  //     console.log(event);
  //   };

  return (
    <>
      <div>Todos</div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <p>{todo.text}</p>
          <button type="button" onClick={() => dispatch(deleteTodo(todo.id))}>
            Delete
          </button>
        </div>
      ))}
    </>
  );
}

export default Todos;
