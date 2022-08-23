import React from "react";
import TodoItem from "./TodoItem";

function Todolist() {
  return (
    <ul className="list-group my-2">
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </ul>
  );
}

export default Todolist;
