import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ActivityForm from './ActivityForm';
import { editActivity, removeActivity } from '../actions/activities';
import { ACTIVITY_PLAN_ROUTE } from '../constants/routes';
import activityPropTypeShape from '../prop-types/activity';
import historyPushPropTypeShape from '../prop-types/historyPush';

const EditActivityPage = props => (
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
    >
      Remove
    </button>
  </div>
);

EditActivityPage.defaultProps = {
  activity: {
    room: 'anywhere',
    teacher: 'Anonymous'
  }
};

EditActivityPage.propTypes = {
  activity: PropTypes.shape(activityPropTypeShape),
  history: PropTypes.shape(historyPushPropTypeShape),
  onEditActivity: PropTypes.func.isRequired,
  onRemoveActivity: PropTypes.func.isRequired
};

const mapStateToProps = (state, props) => ({
  activity: state.activities.find(activity => activity.id === props.match.params.id)
});

const mapDispatchToProps = {
  onEditActivity: editActivity,
  onRemoveActivity: removeActivity
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditActivityPage);
