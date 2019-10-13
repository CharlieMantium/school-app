import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ActivityForm from '../ActivityForm/ActivityForm';
import { startEditActivity, startRemoveActivity } from '../../store/activities/actions';
import { getEditedActivity } from '../../store/activities/selectors';
import { ACTIVITY_PLAN_ROUTE } from '../../constants/routes';
import activityPropTypeShape from '../../prop-types/activity';
import historyPushPropTypeShape from '../../prop-types/history';

const EditActivityPage = ({ activity, history, onStartEditActivity, onStartRemoveActivity }) => (
  <div>
    <ActivityForm
      activity={activity}
      onSubmit={activitySubmited => {
        onStartEditActivity(activity.id, activitySubmited);
        history.push(ACTIVITY_PLAN_ROUTE);
      }}
      data-test="form"
    />
    <button
      onClick={() => {
        onStartRemoveActivity(activity.id);
        history.push(ACTIVITY_PLAN_ROUTE);
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

// TODO: in general, I don't like this onStartEditActivity.
// You could try to handle it in prettier way.
// There is a nice package to handle requests redux-axios-middleware.
// It will be a good job if you will handle it using only documentation. Do it in separate PR.
