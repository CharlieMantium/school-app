import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import { startAddActivity } from 'store/activities/actions';
import { ACTIVITY_PLAN_ROUTE } from 'constants/routes';
import historyPushPropTypeShape from 'prop-types/history';
import { Heading } from 'styles/elements/Heading';
import { ActivityFormWrapper } from 'styles/elements/ActivityFormWrapper';

import AcivityForm from '../ActivityForm';

const AddActivityPage = ({ onStartAddActivity, history }) => (
  <ActivityFormWrapper>
    <Heading as="h1">
      <FormattedMessage id="form.heading.addActivityHeading" />
    </Heading>
    <AcivityForm
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
};

const mapDispatchToProps = {
  onStartAddActivity: startAddActivity,
};

export { AddActivityPage as AddActivityPageUnwrapped };
export default connect(
  null,
  mapDispatchToProps,
)(AddActivityPage);
