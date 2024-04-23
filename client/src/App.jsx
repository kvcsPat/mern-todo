import React, { useEffect, useState } from "react";
import Form from "./Components/Form";
import Todos from "./Components/Todos";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import FormatListBulletedRoundedIcon from "@mui/icons-material/FormatListBulletedRounded";
import { darkTheme } from "./mui";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [alert, setAlert] = useState(false);

  /* ----- FETCH Todos ----- */
  useEffect(() => {
    async function getTodos() {
      const res = await fetch("/api/todos");
      const todos = await res.json();

      setTodos(todos);
    }
    getTodos();
  }, []);

  /* ----- ALERTS ----- */
  useEffect(() => {
    if (alert) {
      let timer = setTimeout(() => setAlert(false), 3000);
      return () => {
        clearTimeout(timer);
      };
    }
    return;
  }, [alert]);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container component="main" maxWidth="sm" sx={{ margin: "1rem auto" }}>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={1}
        >
          <FormatListBulletedRoundedIcon
            sx={{ fontSize: "3rem" }}
          ></FormatListBulletedRoundedIcon>
          <Typography component="h1" variant="h2" gutterBottom>
            Todo App
          </Typography>
        </Stack>
        <Form todos={todos} setTodos={setTodos} setAlert={setAlert} />
        {alert && (
          <Alert
            variant="outlined"
            severity="error"
            color="info"
            sx={{ marginBottom: "1rem" }}
          >
            New todo must be at least 4 characters.
          </Alert>
        )}
        <Todos todos={todos} setTodos={setTodos} />
      </Container>
    </ThemeProvider>
  );
}
