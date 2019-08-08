import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { EDIT_ACTIVITY_ROUTE } from '../constants/routes';

const ActivitiesListItem = ({ name, day, classNo, teacher, id, room }) => (
  <div>
    <Link to={EDIT_ACTIVITY_ROUTE(id)}>
      <h3>{name}</h3>
    </Link>
    <p>{`On ${day} on ${classNo} class with ${teacher} in room: ${room}`}</p>
  </div>
);

ActivitiesListItem.defaultProps = {
  teacher: 'Anonymous',
  room: 'anywhere',
};

ActivitiesListItem.propTypes = {
  name: PropTypes.string.isRequired,
  day: PropTypes.string.isRequired,
  classNo: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  teacher: PropTypes.string,
  room: PropTypes.string,
};

export default ActivitiesListItem;

// TODO: What if I provide Activity Name and Day, but not Class Number?
// For user it will be confusing ;) but this is to handle by separate PR!
