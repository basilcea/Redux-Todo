import React from  'react';
import { FaTrashAlt } from 'react-icons/fa';

 const Todo = (props) => { 
     console.log(props)
    return(
        <div>
        <button onClick ={()=>props.deleteTodo(props.todo.id)}><FaTrashAlt /></button>
        <div onClick ={() => props.toggleTodo(props.todo.id)}>
        <input type='checkbox' value={props.todo.value}/>
        <div>{props.todo.value} </div>
        </div>
        </div>
    )
}

export default Todo;