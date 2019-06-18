import React from 'react';
import {TodoList} from './components/todolist';
// import {combineReducers } from 'redux';


// step 4: CombineReducers not neccesary since only one reducer, 
// const combinedReducer = combineReducers({
//     todos: todoReducer,
//   });
const App = () =>{
    return (
        <div>
        <TodoList />
        </div>
    )
}

export default App;
