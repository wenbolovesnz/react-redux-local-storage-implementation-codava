import uuid from 'node-uuid';

export const addTodoItem = (text) => ({
	type: 'ADD_TODO',
	id: uuid.v4(),
	text
});

export const setVisibilityFilter = (filter) => ({
	type:'SET_VISIBILITY_FILTER',
	filter
});

export const toggleTodo = (id) => ({
	type: 'TOGGLE_TODO',
	id
});