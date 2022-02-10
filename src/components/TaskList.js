import React, { useContext } from "react";
import { Box } from "@mui/material";
import Task from "./Task";
import { todosContext } from "../context/todos-context";

const TaskList = () => {
  const { todos } = useContext(todosContext);

  return (
    <Box>
      {todos.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </Box>
  );
};

export default TaskList;
