import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ActivityForm from '../ActivityForm/ActivityForm';
import { startEditActivity, startRemoveActivity } from '../../store/activities/actions';
import { getEditedActivity } from '../../store/activities/selectors';
import { ACTIVITY_PLAN_ROUTE } from '../../constants/routes';
import activityPropTypeShape from '../../prop-types/activity';
import historyPushPropTypeShape from '../../prop-types/history';

const EditActivityPage = props => (
  <div>
    <ActivityForm
      activity={props.activity}
      onSubmit={activity => {
        props.onStartEditActivity(props.activity.id, activity);
        props.history.push(ACTIVITY_PLAN_ROUTE);
      }}
      data-test="form"
    />
    <button
      onClick={() => {
        props.onStartRemoveActivity(props.activity.id);
        props.history.push(ACTIVITY_PLAN_ROUTE);
      }}
      type="submit"
      data-test="button-remove"
    >
      Remove
    </button>
  </div>
);

EditActivityPage.propTypes = {
  activity: PropTypes.shape(activityPropTypeShape).isRequired,
  history: PropTypes.shape(historyPushPropTypeShape).isRequired,
  onStartEditActivity: PropTypes.func.isRequired,
  onStartRemoveActivity: PropTypes.func.isRequired,
};

const mapStateToProps = (state, props) => ({
  activity: getEditedActivity(state, props),
});

const mapDispatchToProps = {
  onStartEditActivity: startEditActivity,
  onStartRemoveActivity: startRemoveActivity,
};

export { EditActivityPage as EditActivityPageUnwrapped };
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditActivityPage);
