import { createContext } from "react";
import { useTodos } from "../hooks/useTodos";

export const todosContext = createContext({
  // necesitamos tener el contexto
  todos: [],
  switchToActiveHandler: () => {},
  addTaskHandler: () => {},
});

export const TodosContextProvider = ({ children }) => {
  //wrapper para envolver componentes en un contexto
  const todosHookValues = useTodos();

  return (
    <todosContext.Provider value={todosHookValues}>
      {children}
    </todosContext.Provider>
  );
};
