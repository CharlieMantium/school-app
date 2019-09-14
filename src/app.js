import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css';

import AppRouter from './router/AppRouter';
import configureStore from './store/configureStore';
import { addActivity } from './store/activities/actions';
import { MONDAY, TUESDAY } from './constants/dates';
import './styles/styles.scss';

const store = configureStore();

// TODO: dummy data to be removed
store.dispatch(
  addActivity({
    name: 'matma',
    day: TUESDAY,
    classNo: '3',
    room: 'gym',
    teacher: 'Indiana Jones',
  }),
);
store.dispatch(
  addActivity({
    name: 'polski',
    day: MONDAY,
    classNo: '1',
    room: 'hell',
    teacher: 'Malski',
  }),
);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app-root'));

// TODO: your webpack configuration is not ready to build production version of the App.
// But it is not for this PR, add to todos.
