import React from 'react';
import {connect} from 'react-redux';
import ActivitiesListItem from './ActivitiesListItem';
import selectActivities from '../store/activities/selectors/activities';

const ActivitiesList = ({ activities }) => (
  <div>
    <h1>Activities List</h1>
    {activities.map((activity) => (
      <ActivitiesListItem {...activity} key={activity.id}/>
    ))}
  </div>
);

const mapStateToProps = (state) => ({
  activities: selectActivities(state.activities, state.filters)
});

export default connect(mapStateToProps)(ActivitiesList);
