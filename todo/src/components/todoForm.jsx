import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../state/actionDispatchers";
import { FaPlusCircle } from 'react-icons/fa';
import styled from 'styled-components'

const FormContainer = styled.div`
    width:80%;
    border:1px solid green;
`;
class TodoForm extends React.Component {
  textRef = React.createRef();
  onAddTodo = () => {
      // eslint-disable-next-line no-cond-assign
      if( this.textRef.current.value === ''){}
      else{
    this.props.addTodo(this.textRef.current.value);
    this.textRef.current.value = " ";
    // 2- implement so it uses this.props.addQuote
    // and also clears the inputs
  };
}
const
  render() {
    return (
      <FormContainer>
      <h3>Todo:{this.props.numberOfTodos} | Completed :{this.props.numberOfCompletedTodos}</h3>
        <input ref={this.textRef} type="text" placeholder='Type your tasks' />
        <button onClick={this.onAddTodo}><FaPlusCircle /></button>
      </FormContainer>
    );
  }
}

function mapStateToProps(state) {

    return {
      numberOfTodos: state.length,
      numberOfCompletedTodos: state.filter(todo => todo.completed === true)
        .length
    };
  }

export default connect(
  mapStateToProps,
  { addTodo }
)(TodoForm);
