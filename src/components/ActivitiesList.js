import React from 'react';
import {connect} from 'react-redux';
import ActivitiesListItem from './ActivitiesListItem';
import selectActivities from '../selectors/activities';

const ActivitiesList = (props) => (
  <div>
    <h1>Activities List</h1>
    {props.activities.map((activity) => (
      <ActivitiesListItem {...activity} key={activity.id}/>
    ))}
  </div>
);

const mapStateToProps = (state) => {
  return {
    activities: selectActivities(state.activities, state.filters)
  };
};

export default connect(mapStateToProps)(ActivitiesList);
