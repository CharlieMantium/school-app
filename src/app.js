import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addActivity, removeActivity, editActivity} from './actions/activities';
import {setTextFilter} from './actions/filters';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

// const state = () => console.log(store.getState());
// store.subscribe(state);
const entryOne = store.dispatch(addActivity({name: 'matma', day: '2', classNo: 3, room: 'gym'}));
store.dispatch(addActivity({name: 'polski', day: '4', classNo: 1, teacher: 'Malski'}));
store.dispatch(removeActivity({id: entryOne.id}));
console.log(store.getState());
// store.dispatch(setTextFilter('matma'));

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app-root'));
