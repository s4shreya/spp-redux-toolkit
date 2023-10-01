import { useState } from "react";
import { useDispatch } from "react-redux";

import { addTodo } from "../features/todo/todoSlice";

const AddTodo = () => {
  const [inputTask, setInputTask] = useState("");
  const dispatch = useDispatch();

  const onTaskChangeHandler = (event) => {
    setInputTask(event.target.value);
  };

  const addTodoHandler = (event) => {
    event.preventDefault();
    dispatch(addTodo(inputTask));
    setInputTask("");
  };

  return (
    <form onSubmit={addTodoHandler}>
      <input
        type="text"
        placeholder="Enter task..."
        name="todo"
        value={inputTask}
        onChange={onTaskChangeHandler}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTodo;
