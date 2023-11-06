import { useSelector, useDispatch } from "react-redux";

import { deleteTodo } from "../features/todo/todoSlice";
import styles from "./Todos.module.css";

function Todos() {
  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  //   const removeTodoHandler = event => {
  //     console.log(event);
  //   };

  return (
    <div className={styles.todos}>
      <div className={styles.title}>Todos</div>
      {todos.map((todo) => (
        <div key={todo.id} className={styles.todo}>
          <p>{todo.text}</p>
          <button type="button" onClick={() => dispatch(deleteTodo(todo.id))}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Todos;
