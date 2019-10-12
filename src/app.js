import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css';

import AppRouter from './router/AppRouter';
import configureStore from './store/configureStore';
import { startSetActivities } from './store/activities/actions';
import './styles/styles.scss';
import './firebase/firebase';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(<p>Loading...</p>, document.getElementById('app-root'));

store.dispatch(startSetActivities()).then(() => {
  ReactDOM.render(jsx, document.getElementById('app-root'));
});

// TODO: your webpack configuration is not ready to build production version of the App.
// But it is not for this PR, add to todos.
