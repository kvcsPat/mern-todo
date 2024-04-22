import React from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import DeleteIcon from "@mui/icons-material/Delete";
import { pink } from "@mui/material/colors";
import { Item } from "../mui";

export default function Todo({ todo, setTodos }) {
  /* ----- UPDATE Todo status ----- */
  const updateTodo = async (todoId, todoStatus) => {
    const res = await fetch(`/api/todos/${todoId}`, {
      method: "PUT",
      body: JSON.stringify({ status: todoStatus }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await res.json();
    if (json.acknowledged) {
      setTodos((currentTodos) => {
        return currentTodos.map((currentTodo) => {
          if (currentTodo._id === todoId) {
            return { ...currentTodo, status: !currentTodo.status };
          }
          return currentTodo;
        });
      });
    }
  };

  /* ----- DELETE Todo ----- */
  const deleteTodo = async (todoId) => {
    const res = await fetch(`/api/todos/${todoId}`, {
      method: "DELETE",
    });
    const json = await res.json();
    if (json.acknowledged) {
      setTodos((currentTodos) => {
        return currentTodos.filter((currentTodo) => currentTodo._id !== todoId);
      });
    }
  };

  return (
    <Item>
      <Typography component="p" variant="body1" color={"#fff"}>
        {todo.todo}
      </Typography>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={0}
      >
        <Button
          variant="text"
          onClick={() => updateTodo(todo._id, todo.status)}
        >
          {todo.status ? (
            <CheckBoxIcon color="success" fontSize="large">
              Filled
            </CheckBoxIcon>
          ) : (
            <CheckBoxOutlineBlankIcon color="disabled" fontSize="large">
              Filled
            </CheckBoxOutlineBlankIcon>
          )}
        </Button>
        <Button variant="text" onClick={() => deleteTodo(todo._id)}>
          <DeleteIcon sx={{ color: pink[500] }} fontSize="large">
            Filled
          </DeleteIcon>
        </Button>
      </Stack>
    </Item>
  );
}
