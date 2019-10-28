import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { orderBy } from 'lodash';

import activityPropTypeShape from '../../prop-types/activity';
import ActivitiesListItem from '../ActivitiesListItem/ActivitiesListItem';
import { spacing, colors } from '../../styles/base/base';

const DayWrapper = styled.div`
  border: ${spacing.xsSize} solid ${colors.white};
  border-radius: ${spacing.sSize};
  background: rgba(255, 255, 255, 0.8);
  margin: ${spacing.sSize};
  @media (min-width: ${spacing.desktopBreakpoint}) {
    width: 14.2%;
  }
`;

const DayName = styled.p`
  border-bottom: 1px solid currentColor;
  font-weight: bold;
  margin: ${spacing.mSize} auto;
  text-align: center;
  text-shadow: 1px 1px ${colors.white}, 1px -1px ${colors.white}, -1px 1px ${colors.white},
    -1px -1px ${colors.white};
  width: 70%;
`;

const Day = ({ activities, weekDay }) => (
  <DayWrapper>
    <DayName data-test="day-name">{weekDay.toUpperCase()}</DayName>
    {orderBy(activities, activity => activity.classNo).map(activity => (
      <ActivitiesListItem
        activity={activity}
        key={activity.name}
        data-test="activities-list-item"
      />
    ))}
  </DayWrapper>
);

Day.propTypes = {
  activities: PropTypes.arrayOf(PropTypes.shape(activityPropTypeShape)),
  weekDay: PropTypes.string.isRequired,
};

Day.defaultProps = {
  activities: [],
};

export default Day;
