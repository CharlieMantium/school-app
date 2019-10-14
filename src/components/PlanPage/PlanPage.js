import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ActivitiesListFilter from '../ActivitiesListFilter';
import Week from '../Week';
import { startSetActivities } from '../../store/activities/actions';

class PlanPage extends React.Component {
  static propTypes = {
    onStartSetActivities: PropTypes.func,
  };

  static defaultProps = {
    onStartSetActivities: () => {},
  };

  componentDidMount() {
    this.props.onStartSetActivities();
  }

  render() {
    return (
      <div>
        <ActivitiesListFilter data-test="filter-component" />
        <Week data-test="week-component" />
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
