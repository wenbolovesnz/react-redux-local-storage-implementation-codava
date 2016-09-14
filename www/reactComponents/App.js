import React from 'react';
import FilterLink from './FilterLink';
import VisibleTodoList from './VisibleTodoList';
import Todo from './Todo';
import AddTodo from './AddTodo';
import Footer from './Footer';


const TodoApp = () => {
		return (
			<div>
				<AddTodo />
				<VisibleTodoList />
				<Footer />
			</div>
		);
}

export default TodoApp;