import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import activityPropTypeShape from '../prop-types/activity';
import Day from './Day';
import daysOfTheWeek from '../constants/daysOfTheWeek';
import { getActivityItems } from '../store/activities/selectors';

const Week = ({ activities }) => (
  <div>
    {daysOfTheWeek.map(day => (
      <Day
        weekDay={day}
        activities={activities.filter(activity => activity.day === day)}
        key={day}
      />
    ))}
  </div>
);

Week.defaultProps = {
  activities: [],
};

Week.propTypes = {
  activities: PropTypes.arrayOf(PropTypes.shape(activityPropTypeShape)),
};

const mapStateToProps = state => ({
  activities: getActivityItems(state),
});

export default connect(mapStateToProps)(Week);
