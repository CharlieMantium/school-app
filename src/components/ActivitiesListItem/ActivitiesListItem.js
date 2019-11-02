import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { EDIT_ACTIVITY_ROUTE } from '../../constants/routes';
import activityPropTypeShape from '../../prop-types/activity';
import { spacing } from '../../styles/base/base';

const ActivityOrdinalWrapper = styled.p`
  display: inline;
  margin: ${spacing.sSize};
`;

const EditActivityLink = styled(Link)`
  word-break: break-all;
`;

const ActivityDescParagraph = styled.p`
  margin: ${spacing.sSize};
  word-break: break-all;
`;

const ActivitiesListItem = ({ activity: { name, activityOrdinal, teacher, id, room } }) => (
  <>
    <ActivityOrdinalWrapper>{`${activityOrdinal}.`}</ActivityOrdinalWrapper>
    <EditActivityLink to={EDIT_ACTIVITY_ROUTE(id)} data-test="react-link">
      {name}
    </EditActivityLink>
    <ActivityDescParagraph data-test="activity-details">{`Teacher: ${teacher}, in room: ${room}`}</ActivityDescParagraph>
  </>
);

ActivitiesListItem.propTypes = {
  activity: PropTypes.shape(activityPropTypeShape),
};

ActivitiesListItem.defaultProps = {
  activity: {},
};

export default ActivitiesListItem;
