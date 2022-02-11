import { useState } from "react";

export const useTodos = () => {
  const tasks = [
    {
      id: crypto.randomUUID(),
      title: "wash dishes",
      completed: false,
    },
    {
      id: crypto.randomUUID(),
      title: "brush my teeth",
      completed: false,
    },
    {
      id: crypto.randomUUID(),
      title: "take a shower",
      completed: false,
    },
  ];

  const [todos, setTodos] = useState(tasks);

  const switchToActiveHandler = (id, status) => {
    const index = todos.findIndex((todo) => todo.id === id);
    const newTodosCopy = [...todos];
    if (status === "complete") newTodosCopy[index].completed = true;
    else if (status === "incomplete") newTodosCopy[index].completed = false;

    setTodos(newTodosCopy);
  };

  const addTaskHandler = (e) => {
    const data = e.task;
    console.log(`Task: ${data}`);
    const newTodo = {
      id: crypto.randomUUID(),
      title: data,
      completed: false,
    };

    setTodos([...todos, newTodo]);
  };

  const clearCompletedTaskHandler = () => {
    const filteredTask = todos.filter((task) => task.completed === false);
    setTodos(filteredTask);
  };

  //return references
  return {
    todos,
    switchToActiveHandler,
    addTaskHandler,
    clearCompletedTaskHandler,
  };
};
