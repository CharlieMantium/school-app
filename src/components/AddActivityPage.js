import React from 'react';
import {connect} from 'react-redux';
import AcivityForm from './ActivityForm';
import { addActivity } from '../actions/activities';
import { ACTIVITY_PLAN_ROUTE } from '../constants/routes';

const AddActivityPage = ({onAddActivity, history}) => (
  <div>
    <h1>Add Activity</h1>
    <AcivityForm
      onSubmit={(activity) => {
        onAddActivity(activity);
        history.push(ACTIVITY_PLAN_ROUTE);
      }}
    />
  </div>
);

const mapDispatchToProps = ({
  onAddActivity: addActivity
});

export default connect(null, mapDispatchToProps)(AddActivityPage);
