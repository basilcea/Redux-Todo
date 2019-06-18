import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import {todoReducer} from './state/reducers';

// step 4: CombineReducers not neccesary since only one reducer, 
// const combinedReducer = combineReducers({
//     todos: todoReducer,
//   });

// step 5: create store
const store = createStore(
    todoReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );


export default App;
