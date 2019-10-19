import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Loader from 'react-loader';

import ActivitiesListFilter from '../ActivitiesListFilter';
import Week from '../Week';
import { startSetActivities } from '../../store/activities/actions';

class PlanPage extends React.Component {
  static propTypes = {
    onStartSetActivities: PropTypes.func.isRequired,
  };

  state = {
    isLoaded: false,
  };

  async componentDidMount() {
    await this.props.onStartSetActivities();
    this.setState({ isLoaded: true });
  }

  render() {
    return (
      <div>
        <ActivitiesListFilter data-test="filter-component" />
        <Loader loaded={this.state.isLoaded}>
          <Week data-test="week-component" />
        </Loader>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onStartSetActivities: startSetActivities,
};

export { PlanPage as PlanPageUnwrapped };
export default connect(
  null,
  mapDispatchToProps,
)(PlanPage);
