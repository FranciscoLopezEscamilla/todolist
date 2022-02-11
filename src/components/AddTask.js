import React, { useContext } from "react";
import { TextField, Button, Box } from "@mui/material";
import { todosContext } from "../context/todos-context";
import { useForm } from "react-hook-form";

const AddTask = () => {
  const { addTaskHandler, clearCompletedTaskHandler } =
    useContext(todosContext);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (e) => {
    addTaskHandler(e);
    reset();
  };

  const validationSet = {
    required: {
      value: true,
      message: "This field is required",
    },
    minLength: {
      value: 6,
      message: "This task must have more than 5 characters",
    },
    pattern: {
      value: /^[^-\s][a-zA-Z0-9_\s-]+$/,
      message: "Task does not match proper format",
    },
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
      <h2>Add a Task</h2>
      <TextField
        sx={{ width: "100%" }}
        label="New Todo"
        variant="outlined"
        {...register("task", validationSet)}
      />
      {errors.task && <p>{errors.task.message}</p>}
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button type="submit" variant="contained" sx={{ height: 50, my: 2 }}>
          SUBMIT
        </Button>
        <Button
          onClick={clearCompletedTaskHandler}
          variant="contained"
          sx={{ height: 50, my: 2 }}
        >
          CLEAR COMPLETED TASKS
        </Button>
      </Box>
    </Box>
  );
};

export default AddTask;
