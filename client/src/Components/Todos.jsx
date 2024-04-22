import React from "react";
import Stack from "@mui/material/Stack";
import Todo from "./Todo";

export default function Todos({ todos, setTodos }) {
  return (
    <Stack direction="column" alignItems="center" spacing={2}>
      {todos.length > 0 &&
        todos.map((todo) => (
          <Todo key={todo._id} todo={todo} setTodos={setTodos} />
        ))}
    </Stack>
  );
}
