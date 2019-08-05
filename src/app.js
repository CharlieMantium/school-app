import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './router/AppRouter';
import configureStore from './store/configureStore';
import { addActivity } from './actions/activities';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

//TODO: dummy data to be removed
store.dispatch(addActivity({ name: 'matma', day: '2', classNo: '3', room: 'gym' }));
store.dispatch(addActivity({ name: 'polski', day: '4', classNo: '1', teacher: 'Malski' }));

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app-root'));

//TODO: add prettier

//TODO: You sould think about seting up also eslint and stylelint.
//Powerful and it makes our lives easier (together with prettier)

//TODO: learn about prop-types package and implement it (by separate PR). Easy to handle ;)
//use documentation :P

//TODO: your webpack configuration is not ready to build production version of the App.
//But it is not for this PR, add to todoss.
