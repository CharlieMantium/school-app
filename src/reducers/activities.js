import { ADD_ACTIVITY, REMOVE_ACTIVITY, EDIT_ACTIVITY } from '../store/activities/actionTypes';

const activitiesReducerDefaultState = [];

export default (state = activitiesReducerDefaultState, action) => {
  switch (action.type) {
    case ADD_ACTIVITY:
      return [...state, action.activity];
    case REMOVE_ACTIVITY:
      return state.filter(activity => activity.id !== action.id);
    case EDIT_ACTIVITY:
      return state.map(activity => {
        if (activity.id === action.id) {
          return {
            ...activity,
            ...action.updates,
          };
        }
        return activity;
      });
    default:
      return state;
  }
};

// TODO: Imo state shuould be an object
// Probably you will have more fields here in this object.
