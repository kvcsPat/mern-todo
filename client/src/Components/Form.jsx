import React, { useState } from "react";
import "../Style/Form.css";

export default function Form({ todos, setTodos }) {
  const [content, setContent] = useState("");

  /* ----- CREATE Todo ----- */
  const createNewTodo = async (e) => {
    e.preventDefault();

    if (content.length > 3) {
      const res = await fetch("/api/todos", {
        method: "POST",
        body: JSON.stringify({ todo: content }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const newTodo = await res.json();

      setContent("");
      setTodos([...todos, newTodo]);
    }
  };

  return (
    <form className="form" onSubmit={createNewTodo}>
      <input
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Enter a new todo..."
        className="form-input"
        required
      />
      <button type="submit">Create Todo</button>
    </form>
  );
}
