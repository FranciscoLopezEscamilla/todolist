import React, { useContext } from "react";
import { Box, Button } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import { todosContext } from "../context/todos-context";

const Task = ({ task }) => {
  const { switchToActiveHandler } = useContext(todosContext);
  return (
    <Box sx={taskStyle}>
      <p style={task.completed ? lineThrough : null}>{task.title}</p>
      <Box>
        <Button
          sx={{ border: "1px solid green", mx: 2 }}
          onClick={() => switchToActiveHandler(task.id, "complete")}
        >
          {<CheckIcon sx={{ color: "green" }} />}
        </Button>
        <Button
          sx={{ border: "1px solid red" }}
          onClick={() => switchToActiveHandler(task.id, "incomplete")}
        >
          {<ClearIcon sx={{ color: "red" }} />}
        </Button>
      </Box>
    </Box>
  );
};

const taskStyle = {
  border: "1px solid lightgray",
  borderRadius: 2,
  padding: 1,
  my: 1,
  px: 3,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const lineThrough = {
  textDecoration: "line-through solid",
  color: "lightgray",
};

export default Task;
