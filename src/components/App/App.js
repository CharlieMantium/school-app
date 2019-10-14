import React from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';

import AppRouter from '../../router/AppRouter';
import storeShape from '../../prop-types/storeShape';

const App = ({ store }) => (
  <div>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </div>
);

App.propTypes = {
  store: PropTypes.shape(storeShape),
};

App.defaultProps = {
  store: {},
};

export default App;
