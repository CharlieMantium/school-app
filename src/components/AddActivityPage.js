import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AcivityForm from './ActivityForm';
import { addActivity } from '../actions/activities';
import { ACTIVITY_PLAN_ROUTE } from '../constants/routes';
import historyPushPropTypeShape from '../prop-types/historyPush';

const AddActivityPage = ({ onAddActivity, history }) => (
  <div>
    <h1>Add Activity</h1>
    <AcivityForm
      onSubmit={activity => {
        onAddActivity(activity);
        history.push(ACTIVITY_PLAN_ROUTE);
      }}
    />
  </div>
);

AddActivityPage.propTypes = {
  onAddActivity: PropTypes.func.isRequired,
  history: PropTypes.shape(historyPushPropTypeShape)
};

const mapDispatchToProps = {
  onAddActivity: addActivity
};

export default connect(
  null,
  mapDispatchToProps
)(AddActivityPage);

//TODO: Talk with Lukasz about comment:
// const mapDispatchToProps = {
//   onAddActivity: addActivity`
// }

// export default connect(null, mapDispatchh...`
// and then use as an action `onAddActivity` in component (with props destructured)
// (or name it as you wish, but similar to original action).
