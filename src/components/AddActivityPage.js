import React from 'react';
import {connect} from 'react-redux';
import AcivityForm from './ActivityForm';
import { addActivity } from '../actions/activities';

const AddActivityPage = (props) => (
  <div>
    <h1>Add Activity</h1>
    <AcivityForm
      onSubmit={(activity) => {
        props.dispatch(addActivity(activity));
        props.history.push('/');
      }}
    />
  </div>
);

export default connect()(AddActivityPage);