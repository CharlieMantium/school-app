import React from 'react';
import {connect} from 'react-redux';
import ActivityForm from './ActivityForm';
import { editActivity, removeActivity } from '../actions/activities';

const EditActivityPage = (props) => {
  return (
    <div>
      <ActivityForm
        activity={props.activity}
        onSubmit={(activity) => {
          props.dispatch(editActivity(props.activity.id, activity));
          props.history.push('/');
        }}
      />
      <button onClick={() => {
        props.dispatch(removeActivity({id: props.activity.id}));
        props.history.push('/');
      }}>Remove</button>
    </div>
  )
};

const mapStateToProps = (state, props) => {
  return {
    activity: state.activities.find((activity) => activity.id === props.match.params.id)
  };
};

export default connect(mapStateToProps)(EditActivityPage);