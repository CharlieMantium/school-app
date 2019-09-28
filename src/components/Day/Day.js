import React from 'react';
import PropTypes from 'prop-types';

import activityPropTypeShape from '../../prop-types/activity';
import ActivitiesListItem from '../ActivitiesListItem/ActivitiesListItem';

const Day = ({ activities, weekDay }) => (
  <div>
    <p data-test="day-name">{weekDay.toUpperCase()}</p>
    {activities.map(activity => (
      <ActivitiesListItem activity={activity} key={activity.id} data-test="activities-list-item" />
    ))}
  </div>
);

Day.propTypes = {
  activities: PropTypes.arrayOf(PropTypes.shape(activityPropTypeShape)),
  weekDay: PropTypes.string.isRequired,
};

Day.defaultProps = {
  activities: [],
};

export default Day;
