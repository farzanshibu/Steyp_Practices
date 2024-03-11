import del from "../assets/delete.svg";
import revert from "../assets/revert.svg";
import tickGreen from "../assets/tick-green.svg";

import React from "react";
function TodoList({ todos, handleRevert, handleDelete }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <div className={`right  ${todo.completed ? "completedGreen" : ""}`}>
            <div
              className={`circle ${
                todo.completed ? "completedGreenborder" : ""
              }`}
              onClick={() => handleRevert(todo.id)}
            >
              {todo.completed ? <img src={tickGreen} alt="tickGreen" /> : ""}
            </div>
            <p>{`${todo.id}, ${todo.title}`}</p>
          </div>
          <div className="left">
            {todo.completed ? (
              <img
                src={revert}
                alt="Revert"
                onClick={() => handleRevert(todo.id)}
              />
            ) : (
              ""
            )}
            <img src={del} alt="Delete" onClick={() => handleDelete(todo.id)} />
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
