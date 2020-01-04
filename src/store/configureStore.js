import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import activitiesReducer from './activities/reducer';
import authReducer from './auth/reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      activities: activitiesReducer,
      auth: authReducer,
    }),
    composeEnhancers(applyMiddleware(thunk)),
  );
  return store;
};
