import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';

import AcivityForm from '../ActivityForm/ActivityForm';
import { startAddActivity } from '../../store/activities/actions';
import { ACTIVITY_PLAN_ROUTE } from '../../constants/routes';
import historyPushPropTypeShape from '../../prop-types/history';
import { Heading } from '../../styles/elements/Heading';
import { spacing } from '../../styles/base/base';

const AddActivityWrapper = styled.div`
  padding: ${spacing.sSize};

  @media (min-width: ${spacing.desktopBreakpoint}) {
    margin: 0 auto;
    width: 80%;
  }

  @media (min-width: ${spacing.largeDesktopBreakpoint}) {
    margin: 0 auto;
    width: 40%;
  }
`;

const AddActivityPage = ({ onStartAddActivity, history }) => (
  <AddActivityWrapper>
    <Heading as="h1">Add Activity</Heading>
    <AcivityForm
      onSubmit={activity => {
        onStartAddActivity(activity);
        history.push(ACTIVITY_PLAN_ROUTE);
      }}
    />
  </AddActivityWrapper>
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

// TODO: handle absolute imports
