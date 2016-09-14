import App from './reactComponents/App';
import { todos, visibilityFilter} from './reducers/index';
import { loadState, saveState} from './localStorage';
import throttle from 'lodash/throttle';

import { createStore, combineReducers } from 'redux';

const configStore = () => {
	const todoAppReducerIndex = combineReducers({
		todos: todos,
		visibilityFilter:visibilityFilter
	});
	const savedData = loadState();

	const store = createStore(todoAppReducerIndex, savedData);

	store.subscribe(throttle(() => {
		saveState({
			todos: store.getState().todos
		});
		console.log('fired');
	}, 1000));

	return store;
};

export default configStore;


