import React, { useEffect, useState } from "react";

export default function App() {
  const [message, setMessage] = useState(null);

  useEffect(() => {
    async function getTodos() {
      const res = await fetch("/api/todos");
      const todos = await res.json();

      setMessage(todos.mssg);
    }
    getTodos();
  }, []);

  return (
    <main className="container">
      <h1>Todo App</h1>
      {message && <p>{message}</p>}
    </main>
  );
}
