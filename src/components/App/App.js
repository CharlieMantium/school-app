import React from 'react';
import { Provider } from 'react-redux';

import Layout from '../../styles/layout/Layout';
import configureStore from '../../store/configureStore';
import AppRouter from '../../router/AppRouter';

const store = configureStore();

const App = () => (
  <Layout>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </Layout>
);

export default App;
