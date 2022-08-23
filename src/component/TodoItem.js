import axios from "axios";
import React, { useState } from "react";
import TodoContent from "./TodoContent";
import TodoForm from "./TodoForm";

function TodoItem(props) {
  const [isedit, setIsedit] = useState(false);

  const handleSubmitEdit = (title) => {};

  return (
    <li
      className={`list-group-item p-3 callout-${
        props.todo.completed ? "success" : "warning"
      }`}
    >
      {isedit ? (
        <TodoForm
          onSubmit={() => handleSubmitEdit(props.title)}
          onCancel={() => setIsedit(false)}
        />
      ) : (
        <TodoContent
          todo={props.todo}
          fetchTodos={props.fetchTodos}
          openEdit={() => setIsedit(true)}
        />
      )}
    </li>
  );
}

export default TodoItem;
