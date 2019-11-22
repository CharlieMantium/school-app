import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import { startAddActivity } from 'store/activities/actions';
import { ACTIVITY_PLAN_ROUTE } from 'constants/routes';
import historyPushPropTypeShape from 'prop-types/history';
import { Heading } from 'styles/elements/Heading';
import { ActivityFormWrapper } from 'styles/elements/ActivityFormWrapper';
import activityPropTypeShape from 'prop-types/activity';
import { getActivityItems } from 'store/activities/selectors';

import ActivityForm from '../ActivityForm';

const AddActivityPage = ({ onStartAddActivity, history, currentActivities }) => (
  <ActivityFormWrapper>
    <Heading as="h1">
      <FormattedMessage id="form.heading.addActivityHeading" />
    </Heading>
    <ActivityForm
      currentActivities={currentActivities}
      onSubmit={activity => {
        onStartAddActivity(activity);
        history.push(ACTIVITY_PLAN_ROUTE);
      }}
    />
  </ActivityFormWrapper>
);

AddActivityPage.propTypes = {
  onStartAddActivity: PropTypes.func.isRequired,
  history: PropTypes.shape(historyPushPropTypeShape).isRequired,
  currentActivities: PropTypes.arrayOf(PropTypes.shape(activityPropTypeShape)),
};

AddActivityPage.defaultProps = {
  currentActivities: [],
};

const mapStateToProps = state => ({
  currentActivities: getActivityItems(state),
});

const mapDispatchToProps = {
  onStartAddActivity: startAddActivity,
};

export { AddActivityPage as AddActivityPageUnwrapped };
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddActivityPage);
