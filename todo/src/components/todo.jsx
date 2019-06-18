import React from  'react';

 const Todo = (props) => { 
    return(
        <div>
        <button onClick ={()=>props.deleteTodo()}>Delete</button>
        <div onClick ={() => props.toggleTodo()}>
        <input type='checkbox' value={props.todo.value}/>
        <div>{props.todo.value} </div>
        </div>
        </div>
    )
}

export default Todo;