import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import activitiesReducer from './activities/reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(combineReducers({}) activitiesReducer, composeEnhancers(applyMiddleware(thunk)));
  return store;
};
