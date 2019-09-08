import React from 'react';
import PropTypes from 'prop-types';
import activityPropTypeShape from '../prop-types/activity';
import ActivitiesListItem from './ActivitiesListItem';

const Day = ({ activities, weekDay }) => (
  <div>
    <p>{weekDay.toUpperCase()}</p>
    {activities.map(activity => (
      <ActivitiesListItem {...activity} key={activity.id} />
    ))}
  </div>
);

Day.defaultProps = {
  activities: [],
};

Day.propTypes = {
  activities: PropTypes.arrayOf(PropTypes.shape(activityPropTypeShape)),
  weekDay: PropTypes.string.isRequired,
};

export default Day;
