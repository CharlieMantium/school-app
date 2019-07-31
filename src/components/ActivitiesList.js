import React from 'react';
import PropTypes from 'prop-types';
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

ActivitiesList.propTypes = {
  activities: PropTypes.array
};

const mapStateToProps = (state) => ({
  activities: selectActivities(state.activities, state.filters)
});

export default connect(mapStateToProps)(ActivitiesList);
