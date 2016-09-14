import React from 'react';
import TodoList from './TodoList';
import { connect } from 'react-redux';
import { toggleTodo } from '../actionCreators/actions';

const getVisibleTodos = (
	todos,
	filter
) => {
	switch (filter) {
		case 'SHOW_ALL':
			return todos;
		case 'SHOW_COMPLETED':
			return todos.filter(
				t => t.completed
			);
		case 'SHOW_ACTIVE':
			return todos.filter(
				t => !t.completed
			);
	}
};

const mapStateToProps = (state) => ({
	todos: getVisibleTodos(state.todos, state.visibilityFilter)
});

const mapDispatchToProps = (dispatch) => ({
	onTodoClick(id){
		dispatch(toggleTodo(id))
	}
});

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);

//class VisibleTodoList extends React.Component{
//	componentDidMount(){
//		const { store } = this.context;
//		this.unsubscribe = store.subscribe(() => this.forceUpdate());
//	}
//
//	componentWillUnmount(){
//		this.unsubscribe();
//	}
//
//	render(){
//		const { store } = this.context;
//		const state = store.getState();
//
//		return(<TodoList todos ={getVisibleTodos(state.todos, state.visibilityFilter)}
//		                 onTodoClick={(id) =>
//									            store.dispatch({
//									              type: 'TOGGLE_TODO',
//									              id
//									            })} />
//		);
//
//	}
//}
//
//VisibleTodoList.contextTypes = {
//	store: React.PropTypes.object
//};

export default VisibleTodoList;


