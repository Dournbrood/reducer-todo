import React, { useReducer } from 'react';
import { reducer, initialState } from "./reducers/myReducer";
import TodoForm from "./components/TodoForm";
import ListDisplay from "./components/ListDisplay";
import "./styles.css"

function App() {
  const [taskState, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <TodoForm taskState={taskState} dispatch={dispatch} />
      <ListDisplay taskState={taskState} dispatch={dispatch} />
    </div>
  );
}

export default App;
