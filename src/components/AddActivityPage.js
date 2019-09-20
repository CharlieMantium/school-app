import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import AcivityForm from './ActivityForm';
import { addActivity } from '../store/activities/actions';
import { ACTIVITY_PLAN_ROUTE } from '../constants/routes';
import historyPushPropTypeShape from '../prop-types/history';

export const AddActivityPage = ({ onAddActivity, history }) => (
  <div>
    <h1>Add Activity</h1>
    <AcivityForm
      onSubmit={activity => {
        onAddActivity(activity);
        history.push(ACTIVITY_PLAN_ROUTE);
      }}
    />
  </div>
);

AddActivityPage.propTypes = {
  onAddActivity: PropTypes.func.isRequired,
  history: PropTypes.shape(historyPushPropTypeShape).isRequired,
};

const mapDispatchToProps = {
  onAddActivity: addActivity,
};

export default connect(
  null,
  mapDispatchToProps,
)(AddActivityPage);

// TODO: Ask Lukasz about null in export

// TODO: handle absolute imports
