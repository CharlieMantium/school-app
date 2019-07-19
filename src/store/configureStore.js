import {createStore, combineReducers} from 'redux';
import activitiesReducer from '../reducers/activities';
import filtersReducer from '../reducers/filters';

export default () => {
  const store = createStore(
    combineReducers({
      activities: activitiesReducer,
      filters: filtersReducer
    }),
    window && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};
