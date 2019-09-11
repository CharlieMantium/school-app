import { createStore } from 'redux';

import activitiesReducer from './activities/reducer';

export default () => {
  const store = createStore(
    activitiesReducer,
    window && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );
  return store;
};
