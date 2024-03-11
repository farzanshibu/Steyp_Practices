import TodoCard from "./components/TodoCard";
import InputForm from "./components/InputForm";
import "./App.css";
import { useState } from "react";

let default_todo_list = [
  {
    id: 1,
    title: "name1",
    completed: true,
  },
  {
    id: 2,
    title: "name2",
    completed: false,
  },
  {
    id: 3,
    title: "name3",
    completed: true,
  },
];

let id = 4;

function App() {
  const [todos, setTodos] = useState(default_todo_list);

  const handleRevert = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
    console.log("Revert:" + id);
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    console.log("Delete:" + id);
  };
  const handleSubmit = (title) => {
    if (!title) return;
    let new_todo = {
      id: id++,
      title,
      completed: false,
    };
    setTodos([...todos, new_todo]);
    console.log("Added:" + new_todo.id);
    
  };

  return (
    <div className="App">
      <div className="wrapper">
        <h1>Todo List</h1>
        <TodoCard
          title="Things to be Done"
          todos={todos.filter((todo) => todo.completed === false)}
          handleDelete={handleDelete}
          handleRevert={handleRevert}
        />
        <InputForm handleSubmit={handleSubmit} />
        <TodoCard
          title="Complete"
          todos={todos.filter((todo) => todo.completed === true)}
          handleDelete={handleDelete}
          handleRevert={handleRevert}
        />
      </div>
    </div>
  );
}

export default App;
