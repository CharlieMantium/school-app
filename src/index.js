import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';

import configureStore from './store/configureStore';
import App from './components/App';
import './styles/styles.scss';
import './firebase/firebase';

const store = configureStore();

ReactDOM.render(<App store={store} />, document.getElementById('app-root'));

// TODO: your webpack configuration is not ready to build production version of the App.
// But it is not for this PR, add to todos.
