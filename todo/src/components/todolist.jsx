import React from "react";
import { connect } from "react-redux";
// step 8 import the action dispatchers
import * as actionDispatchers from "../state/actionDispatchers";
import Todo from "./todo";

function mapStateToProps(state) {
  // STEP 9: FLESH OUT
  return {
    todos: state.todos
  };
}

export class TodoList extends React.Component {
  render() {
    const todoList = this.props.todos || [];
    return (
      <div>
        <h1>Next To Do</h1>
        <div>
          {todoList.map(todo => (
            <Todo
              key={todo.id}
              todo={todo}
              deleteTodo={this.props.deleteTodo(todo.id)}
              toggleTodo={this.props.toggleTodo(todo.id)}
            />
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
  actionDispatchers
)(TodoList);
