import "./App.css";
import { Box, Grid } from "@mui/material";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { TodosContextProvider } from "./context/todos-context";

function App() {
  return (
    <TodosContextProvider>
      <Box sx={appStyle}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <AddTask />
          </Grid>
          <Grid item xs={12}>
            <TaskList />
          </Grid>
        </Grid>
      </Box>
    </TodosContextProvider>
  );
}

const appStyle = {
  flex: 1,
  minWidth: 400,
  width: "50%",
  marginTop: 20,
  margin: 10,
};

export default App;
