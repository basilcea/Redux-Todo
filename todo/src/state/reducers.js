import * as types from './actionTypes';

// Step 3: One reducer state

export function todoReducer (state=[] , action){
    switch(action.type){
        case(types.ADD_TODO):
        return [...state, action.payload];
        case(types.DELETE_TODO):
        return state.filter(todo => todo.id !== action.payload)
        case(types.TOGGLE_TODO):
        return state.map(todo =>{
            if(todo.id === action.payload){
                return {...todo ,completed: !todo.completed}
            }
            return todo;
        });
        default:
        return state;
    }
}