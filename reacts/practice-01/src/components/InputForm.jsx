import React, { useState } from "react";
import plus from "../assets/plus.svg";
function InputForm(props) {
  const [todo, setTodo] = useState("");

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleSubmit(todo);
    setTodo("");
  };
  return (
    <div className="container-inner">
      <form onSubmit={handleSubmit}>
        <img src={plus} alt="Plus Icon" />
        <input
          value={todo}
          onChange={handleChange}
          type="text"
          placeholder="Type new task..."
        />
        <button type="submit">Add New</button>
      </form>
    </div>
  );
}

export default InputForm;
