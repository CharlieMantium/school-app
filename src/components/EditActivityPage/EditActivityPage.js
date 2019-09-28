import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ActivityForm from '../ActivityForm/ActivityForm';
import { editActivity, removeActivity } from '../../store/activities/actions';
import { getEditedActivity } from '../../store/activities/selectors';
import { ACTIVITY_PLAN_ROUTE } from '../../constants/routes';
import activityPropTypeShape from '../../prop-types/activity';
import historyPushPropTypeShape from '../../prop-types/history';

const EditActivityPage = props => (
  <div>
    <ActivityForm
      activity={props.activity}
      onSubmit={activity => {
        props.onEditActivity(props.activity.id, activity);
        props.history.push(ACTIVITY_PLAN_ROUTE);
      }}
      data-test="form"
    />
    <button
      onClick={() => {
        props.onRemoveActivity(props.activity.id);
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
  onEditActivity: PropTypes.func.isRequired,
  onRemoveActivity: PropTypes.func.isRequired,
};

const mapStateToProps = (state, props) => ({
  activity: getEditedActivity(state, props),
});

const mapDispatchToProps = {
  onEditActivity: editActivity,
  onRemoveActivity: removeActivity,
};

export { EditActivityPage as EditActivityPageUnwrapped };
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditActivityPage);