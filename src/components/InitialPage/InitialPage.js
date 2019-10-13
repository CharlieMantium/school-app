import { Provider } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { startSetActivities } from '../../store/activities/actions';
import AppRouter from '../../router/AppRouter';
import storeShape from '../../prop-types/storeShape';

class InitialPage extends Component {
  static propTypes = {
    store: PropTypes.shape(storeShape),
  };

  static defaultProps = {
    store: {},
  };

  constructor(props) {
    super(props);
    this.state = {
      store: props.store,
    };
  }

  componentDidMount() {
    const { store } = this.state;
    store.dispatch(startSetActivities());
  }

  render() {
    const { store } = this.state;
    return (
      <Provider store={store}>
        <AppRouter />
      </Provider>
    );
  }
}

export default InitialPage;
