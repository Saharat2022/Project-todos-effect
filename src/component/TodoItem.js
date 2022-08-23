import axios from "axios";
import React, { useState } from "react";
import TodoContent from "./TodoContent";
import TodoForm from "./TodoForm";

function TodoItem(props) {
  const [isedit, setIsedit] = useState(false);

  const handleSubmitEdit = async (title) => {
    try {
      await axios.put("http://localhost:8080/todos/" + props.todo.id, {
        title,
        completed: props.todo.completed,
      });
      props.fetchTodos();
      setIsedit(false);
    } catch (err) {
      console.log(err);
    }
  };

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
          initialValue={props.todo.title}
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
