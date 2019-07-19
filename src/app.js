import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './router/AppRouter';
import configureStore from './store/configureStore';
import {addActivity, removeActivity, editActivity} from './actions/activities';
import {setTextFilter} from './actions/filters';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

//dummy data to be removed
store.dispatch(addActivity({name: 'matma', day: '2', classNo: 3, room: 'gym'}));
store.dispatch(addActivity({name: 'polski', day: '4', classNo: 1, teacher: 'Malski'}));

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app-root'));
