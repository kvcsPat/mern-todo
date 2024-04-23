import React, { useState } from "react";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";

export default function Form({ todos, setTodos, setAlert }) {
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
    } else {
      setAlert(true);
    }
  };

  return (
    <Container
      component="form"
      onSubmit={createNewTodo}
      sx={{ padding: "0 !important" }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        margin={"1rem auto"}
        spacing={2}
      >
        <TextField
          id="outlined-basic"
          label="Add new todo"
          variant="outlined"
          fullWidth
          size="medium"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button
          type="submit"
          variant="contained"
          size="large"
          sx={{ padding: "10px 22px" }}
        >
          <AddIcon fontSize="large">Filled</AddIcon>
        </Button>
      </Stack>
    </Container>
  );
}
