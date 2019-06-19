// step 7 create action dispatchers
import uuid from "uuid";
import * as types from "./actionTypes";

export const addTodo = (value) => {
  return {
    type: types.ADD_TODO,
    payload: {
      value,
      completed: false,
      id: uuid()
    }
  };
};
export const deleteTodo = (id )=> {
  return {
    type: types.DELETE_TODO,
    payload: id
  };
};
export const  toggleTodo = id =>{
    return {
        type:types.TOGGLE_TODO,
        payload:id
    }
}
