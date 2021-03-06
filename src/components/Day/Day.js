import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { orderBy } from 'lodash';
import { FormattedMessage } from 'react-intl';

import activityPropTypeShape from 'prop-types/activity';
import { colors, effects, spacing } from 'styles/base';

import ActivitiesListItem from '../ActivitiesListItem';

const DayWrapper = styled.div`
  border: ${spacing.xsSize} solid ${colors.secondary};
  border-radius: ${spacing.sSize};
  background: rgba(255, 255, 255, 0.8);
  margin: ${spacing.sSize};
  padding: ${spacing.sSize};

  @media (min-width: ${spacing.desktopBreakpoint}) {
    width: 14.2%;
  }
`;

const DayName = styled(FormattedMessage)`
  overflow-wrap: break-word;
  border-bottom: ${spacing.xxsSize} solid currentColor;
  font-weight: bold;
  margin: ${spacing.sSize} auto;
  text-align: center;
  text-shadow: ${effects.outline(colors.secondary, spacing.xxsSize)};
  text-transform: uppercase;
  width: 70%;
`;

const Day = ({ activities, weekDay }) => (
  <DayWrapper>
    <FormattedMessage id={`weekDays.${weekDay}`} defaultMessage={weekDay} data-test="day-name">
      {value => (
        <DayName id="dayName" as="p">
          {value}
        </DayName>
      )}
    </FormattedMessage>

    {orderBy(activities, activity => Number(activity.activityOrdinal)).map(activity => (
      <ActivitiesListItem activity={activity} key={activity.id} data-test="activities-list-item" />
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

export { Day as DayUnwrapped };
export default Day;
