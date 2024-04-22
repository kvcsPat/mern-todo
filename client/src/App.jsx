import React, { useEffect, useState } from "react";
import Form from "./Components/Form";
import Todos from "./Components/Todos";
import "./Style/reset.css";
import "./Style/App.css";

export default function App() {
  const [todos, setTodos] = useState([]);

  /* ----- FETCH Todos ----- */
  useEffect(() => {
    async function getTodos() {
      const res = await fetch("/api/todos");
      const todos = await res.json();

      setTodos(todos);
    }
    getTodos();
  }, []);

  return (
    <main className="container">
      <h1 className="title">Todo App</h1>
      <Form todos={todos} setTodos={setTodos} />
      <Todos todos={todos} setTodos={setTodos} />
    </main>
  );
}
