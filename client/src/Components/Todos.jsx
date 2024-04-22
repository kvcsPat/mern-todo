import React from "react";
import Todo from "./Todo";
import "../Style/Todos.css";

export default function Todos({ todos, setTodos }) {
  return (
    <div className="todos">
      {todos.length > 0 &&
        todos.map((todo) => (
          <Todo key={todo._id} todo={todo} setTodos={setTodos} />
        ))}
    </div>
  );
}
