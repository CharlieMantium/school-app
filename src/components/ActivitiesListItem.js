import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { EDIT_ACTIVITY_ROUTE } from '../constants/routes';

const ActivitiesListItem = ({ name, day, classNo, teacher, id }) => (
  <div>
    <Link to={EDIT_ACTIVITY_ROUTE(id)}>
      <h3>{name}</h3>
    </Link>
    <p>{`On ${day} on ${classNo} class with ${teacher}`}</p>
  </div>
);

ActivitiesListItem.propTypes = {
  name: PropTypes.string,
  day: PropTypes.string,
  classNo: PropTypes.string,
  teacher: PropTypes.string,
  id: PropTypes.string
};

export default ActivitiesListItem;
