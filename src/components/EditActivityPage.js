import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ActivityForm from './ActivityForm';
import { editActivity, removeActivity } from '../store/activities/actions';
import { getEditedActivity } from '../store/activities/selectors';
import { ACTIVITY_PLAN_ROUTE } from '../constants/routes';
import activityPropTypeShape from '../prop-types/activity';
import historyPushPropTypeShape from '../prop-types/history';

export const EditActivityPage = props => (
  <div>
    <ActivityForm
      activity={props.activity}
      onSubmit={activity => {
        props.onEditActivity(props.activity.id, activity);
        props.history.push(ACTIVITY_PLAN_ROUTE);
      }}
    />
    <button
      onClick={() => {
        props.onRemoveActivity(props.activity.id);
        props.history.push(ACTIVITY_PLAN_ROUTE);
      }}
      type="submit"
    >
      Remove
    </button>
  </div>
);

EditActivityPage.propTypes = {
  activity: PropTypes.shape(activityPropTypeShape),
  history: PropTypes.shape(historyPushPropTypeShape).isRequired,
  onEditActivity: PropTypes.func.isRequired,
  onRemoveActivity: PropTypes.func.isRequired,
};

EditActivityPage.defaultProps = {
  activity: {},
};

const mapStateToProps = (state, props) => ({
  activity: getEditedActivity(state, props),
});

const mapDispatchToProps = {
  onEditActivity: editActivity,
  onRemoveActivity: removeActivity,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditActivityPage);
