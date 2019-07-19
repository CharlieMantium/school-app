import React from 'react';
import {connect} from 'react-redux';
import ActivityForm from './ActivityForm';
import { editActivity, removeActivity } from '../actions/activities';
import { ACTIVITY_PLAN_ROUTE } from '../constants/routes';

const EditActivityPage = (props) => (
  <div>
    <ActivityForm
      activity={props.activity}
      onSubmit={(activity) => {
        props.dispatch(editActivity(props.activity.id, activity));
        props.history.push(ACTIVITY_PLAN_ROUTE);
      }}
    />
    <button onClick={() => {
      props.dispatch(removeActivity(props.activity.id));
      props.history.push(ACTIVITY_PLAN_ROUTE);
    }}>Remove</button>
  </div>
);

const mapStateToProps = (state, props) => ({
  activity: state.activities.find((activity) => activity.id === props.match.params.id)
});

export default connect(mapStateToProps)(EditActivityPage);