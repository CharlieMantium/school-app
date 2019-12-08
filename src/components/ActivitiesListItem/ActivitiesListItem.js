import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import uuid4 from 'uuid-v4';

import { EDIT_ACTIVITY_ROUTE } from 'constants/routes';
import activityPropTypeShape from 'prop-types/activity';
import { colors, effects, spacing, fontSizes } from 'styles/base';
import { divideByFilteredString } from 'helpers/divideByFilteredString';

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

const HighlightedSpan = styled.span`
  color: ${props => props.isHighlighted && `${colors.pink}`};
  background-color: ${props => props.isHighlighted && `${colors.turquoise}`};
`;

const ActivitiesListItem = ({ activity: { name, activityOrdinal, teacher, id, room }, filter }) => {
  const renderedValues = value => {
    if (filter) {
      return divideByFilteredString(value, filter).map(item => (
        <HighlightedSpan isHighlighted={item.isSearched} key={uuid4()}>
          {item.str}
        </HighlightedSpan>
      ));
    }
    return value;
  };
  return (
    <>
      <ActivityOrdinalWrapper>{`${activityOrdinal}.`}</ActivityOrdinalWrapper>
      <EditActivityLink data-test="react-link" to={EDIT_ACTIVITY_ROUTE(id)}>
        {renderedValues(name)}
      </EditActivityLink>
      <ActivityDesc>
        <FormattedMessage
          id="planView.activityDetails"
          defaultMessage="Teacher: {teacher}, in room: {room}"
          values={{ teacher: renderedValues(teacher), room: renderedValues(room) }}
          data-test="activity-details"
        />
      </ActivityDesc>
    </>
  );
};

ActivitiesListItem.propTypes = {
  activity: PropTypes.shape(activityPropTypeShape),
  filter: PropTypes.string,
};

ActivitiesListItem.defaultProps = {
  activity: {},
  filter: '',
};

const mapStateToProps = ({ filter }) => ({
  filter,
});

export { ActivitiesListItem as ActivitiesListItemUnwrapped };
export default connect(mapStateToProps)(ActivitiesListItem);
