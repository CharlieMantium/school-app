import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';

import activityPropTypeShape from '../../prop-types/activity';
import Day from '../Day/Day';
import { daysOfTheWeek } from '../../constants/dates';
import {
	getActivityItems,
	getActivitiesForDay,
} from '../../store/activities/selectors';
import { spacing } from '../../styles/base/base';

const StyledWeekWrapper = styled.div`
	@media (min-width: ${spacing.desktopBreakpoint}) {
		align-items: stretch;
		display: flex;
		height: 80vh;
	}
`;

const Week = ({ activities }) => (
	<>
		<StyledWeekWrapper>
			{daysOfTheWeek.map(day => (
				<Day
					weekDay={day}
					activities={getActivitiesForDay(activities, day)}
					key={day}
					data-test="day-component"
				/>
			))}
		</StyledWeekWrapper>
	</>
);

Week.propTypes = {
	activities: PropTypes.arrayOf(PropTypes.shape(activityPropTypeShape)),
};

Week.defaultProps = {
	activities: [],
};

const mapStateToProps = state => ({
	activities: getActivityItems(state),
});

export { Week as WeekUnwrapped };
export default connect(mapStateToProps)(Week);
