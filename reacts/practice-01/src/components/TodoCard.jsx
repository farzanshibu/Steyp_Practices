import React from "react";
import TodoList from "./TodoList";

function TodoCard({ todos, title, handleDelete, handleRevert }) {
  return (
    <div className="container">
      <h2>{title}</h2>
      <div className="list">
        <TodoList
          title={title}
          todos={todos}
          handleDelete={handleDelete}
          handleRevert={handleRevert}
        />
      </div>
    </div>
  );
}

export default TodoCard;
