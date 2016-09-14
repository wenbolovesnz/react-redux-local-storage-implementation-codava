import React from 'react';
import uuid from 'node-uuid';
import { connect } from 'react-redux';
import { addTodoItem } from '../actionCreators/actions';

let AddTodo = ({dispatch}) =>{
	let input;
	return (<div>
		<input ref={ node => input = node} />
		<button onClick={() => {
          dispatch(addTodoItem(input.value));
          input.value = '';
        }}>
			Add Todo
		</button>
	</div>)
};

AddTodo = connect()(AddTodo);
//AddTodo = connect(
//	(state) => {
//		return state;
//	},
//	(dispatch) => {
//		return { dispatch };
//	}
//)(AddTodo);

export default AddTodo;