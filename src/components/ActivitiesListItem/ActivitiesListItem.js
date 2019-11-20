import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import { EDIT_ACTIVITY_ROUTE } from 'constants/routes';
import activityPropTypeShape from 'prop-types/activity';
import { colors, effects, spacing, fontSizes } from 'styles/base';

const ActivityOrdinalWrapper = styled.p`
  display: inline;
  margin-right: ${spacing.sSize};
`;

const EditActivityLink = styled(Link)`
  color: ${colors.green};
  cursor: pointer;
  font-size: ${fontSizes.lFontSize};
  text-decoration: none;
  text-shadow: ${effects.outline(colors.black)};
  word-break: break-word;
`;

const ActivityDesc = styled.p`
  margin: ${spacing.xsSize} 0;
  word-break: break-word;
`;

const ActivitiesListItem = ({ activity: { name, activityOrdinal, teacher, id, room } }) => (
  <>
    <ActivityOrdinalWrapper>{`${activityOrdinal}.`}</ActivityOrdinalWrapper>
    <FormattedMessage data-test="react-link" id="planView.activityName" defaultMessage={name}>
      {value => <EditActivityLink to={EDIT_ACTIVITY_ROUTE(id)}>{value}</EditActivityLink>}
    </FormattedMessage>
    <ActivityDesc>
      <FormattedMessage
        id="planView.activityDetails"
        defaultMessage="Teacher: {teacher}, in room: {room}"
        values={{ teacher, room }}
        data-test="activity-details"
      />
    </ActivityDesc>
  </>
);

ActivitiesListItem.propTypes = {
  activity: PropTypes.shape(activityPropTypeShape),
};

ActivitiesListItem.defaultProps = {
  activity: {},
};

export default ActivitiesListItem;
