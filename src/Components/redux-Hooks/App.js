import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

function App(props) {
  return (
    <div>
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default App;
