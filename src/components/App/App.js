import React from 'react';
import { Provider } from 'react-redux';

import configureStore from '../../store/configureStore';
import AppRouter from '../../router/AppRouter';

const store = configureStore();

const App = () => (
  <div>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </div>
);

export default App;
