import React from "react";
import { connect } from "react-redux";
// step 8 import the action dispatchers
import {deleteTodo, toggleTodo} from "../state/actionDispatchers";
import Todo from "./todo";

function mapStateToProps(state) {
  // STEP 9: FLESH OUT
  return {
    todos: state
  };
}

class TodoList extends React.Component {
  render() {
    const todoList = this.props.todos;
    console.log(todoList)
    return (
      <div>
        <h1>Next To Do</h1>
        <div>
       
          {todoList.map(todo => (
            <ul key={todo.id}>
            <Todo
              todo={todo}
              deleteTodo={this.props.deleteTodo}
              toggleTodo={this.props.toggleTodo}
            />
            </ul>
          ))}
        </div>
      </div>
    );
  }
}
export default connect(
  // STEP 10: CONNECT THE COMPONENT PASSING MAP STATE TO PROPS AS 1ST ARG
  mapStateToProps,
  // STEP 12: INJECT THE ACTION DISPATCHERS AS 2ND ARG TO CONNECT
  {deleteTodo , toggleTodo}
)(TodoList);
