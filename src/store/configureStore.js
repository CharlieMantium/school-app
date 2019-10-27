import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import activitiesReducer from './activities/reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
	const store = createStore(
		activitiesReducer,
		composeEnhancers(applyMiddleware(thunk)),
	);
	return store;
};
