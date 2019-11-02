import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import AcivityForm from '../ActivityForm/ActivityForm';
import { startAddActivity } from '../../store/activities/actions';
import { ACTIVITY_PLAN_ROUTE } from '../../constants/routes';
import historyPushPropTypeShape from '../../prop-types/history';

const AddActivityPage = ({ onStartAddActivity, history }) => (
  <div>
    <h1>Add Activity</h1>
    <AcivityForm
      onSubmit={activity => {
        onStartAddActivity(activity);
        history.push(ACTIVITY_PLAN_ROUTE);
      }}
    />
  </div>
);

AddActivityPage.propTypes = {
  onStartAddActivity: PropTypes.func.isRequired,
  history: PropTypes.shape(historyPushPropTypeShape).isRequired,
};

const mapDispatchToProps = {
  onStartAddActivity: startAddActivity,
};

export { AddActivityPage as AddActivityPageUnwrapped };
export default connect(
  null,
  mapDispatchToProps,
)(AddActivityPage);

// TODO: handle absolute imports
