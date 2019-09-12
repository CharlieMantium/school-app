import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { EDIT_ACTIVITY_ROUTE } from '../constants/routes';
import activityPropTypeShape from '../prop-types/activity';

const ActivitiesListItem = ({ activity: { name, day, classNo, teacher, id, room } }) => (
  <div>
    <Link to={EDIT_ACTIVITY_ROUTE(id)}>
      <h3>{name}</h3>
    </Link>
    <p>{`On ${day} on ${classNo} class with ${teacher} in room: ${room}`}</p>
  </div>
);

ActivitiesListItem.propTypes = {
  activity: PropTypes.shape(activityPropTypeShape),
};

ActivitiesListItem.defaultProps = {
  activity: {},
};

export default ActivitiesListItem;
