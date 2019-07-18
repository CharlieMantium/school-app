import React from 'react';
import {Link} from 'react-router-dom';

const ActivitiesListItem = ({name, day, classNo, teacher, id}) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{name}</h3>
    </Link>
    <p>On {day} on {classNo} class with {teacher}</p>
  </div>
);

export default ActivitiesListItem;