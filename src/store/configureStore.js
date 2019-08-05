import { createStore, combineReducers } from 'redux';
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

//TODO: Also, but not in this PR (separate one) I recommend you to restucture the store
//files to have:
//  store/activities/actions.js
//  store/activities/reducer.js
//  store/activities/filters.js

//TODO: I see that selectors folder has been created. I don't see reason for
//  that.store/activities/actions.js
//	store/activities/reducer.js
//	store/activities/filters.js
//	store/activities/selectors.js.

//TODO:	BTW -> filters could be in selectors, but don't do taht in this PR
