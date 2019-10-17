import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';

import App from './components/App';
import './styles/styles.scss';
import './firebase/firebase';

ReactDOM.render(<App />, document.getElementById('app-root'));

// TODO: your webpack configuration is not ready to build production version of the App.
// But it is not for this PR, add to todos.
