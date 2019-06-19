import React from "react";
import TodoList from "./components/todoList";
import TodoForm from "./components/todoForm";
// import {combineReducers } from 'redux';

// step 4: CombineReducers not neccesary since only one reducer,
// const combinedReducer = combineReducers({
//     todos: todoReducer,
//   });
const App = () => {
  return (
    <div>
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default App;
