import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './router/AppRouter';
import configureStore from './store/configureStore';
import { addActivity } from './actions/activities';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

// TODO: dummy data to be removed
store.dispatch(
  addActivity({
    name: 'matma',
    day: '2',
    classNo: '3',
    room: 'gym',
  }),
);
store.dispatch(
  addActivity({
    name: 'polski',
    day: '4',
    classNo: '1',
    teacher: 'Malski',
  }),
);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app-root'));

// TODO: nice one :) you can stay with this config (eslint, prettier), but if you wish to
// have super nice and verified one, check airbnb linter settings ;) not in this branch

// TODO: your webpack configuration is not ready to build production version of the App.
// But it is not for this PR, add to todos.
