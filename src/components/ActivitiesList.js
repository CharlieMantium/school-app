import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ActivitiesListItem from './ActivitiesListItem';
import selectActivities from '../store/activities/selectors/activities';
import activityPropTypeShape from '../prop-types/activity';

const ActivitiesList = ({ activities }) => (
  <div>
    <h1>Activities List</h1>
    {activities.map(activity => (
      <ActivitiesListItem {...activity} key={activity.id} />
    ))}
  </div>
);

ActivitiesList.defaultProps = {
  activities: [],
};

ActivitiesList.propTypes = {
  activities: PropTypes.arrayOf(PropTypes.shape(activityPropTypeShape)),
};

const mapStateToProps = state => ({
  activities: selectActivities(state.activities, state.filters),
});

export default connect(mapStateToProps)(ActivitiesList);
