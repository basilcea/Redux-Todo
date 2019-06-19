import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore} from 'redux';
import todoReducer from './state/reducers';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

// step 5: create store
export const store = createStore(
    todoReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );
// step 6 wrap App around provider

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
