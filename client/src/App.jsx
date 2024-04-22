import React, { useEffect, useState } from "react";
import Form from "./Components/Form";
import Todos from "./Components/Todos";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { darkTheme } from "./mui";

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
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container component="main" maxWidth="sm" sx={{ marginBottom: "1rem" }}>
        <Typography
          component="h1"
          variant="h2"
          gutterBottom
          sx={{ textAlign: "center", marginTop: "1rem" }}
        >
          Todo App
        </Typography>
        <Form todos={todos} setTodos={setTodos} />
        <Todos todos={todos} setTodos={setTodos} />
      </Container>
    </ThemeProvider>
  );
}
