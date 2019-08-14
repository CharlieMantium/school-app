import { ADD_ACTIVITY, REMOVE_ACTIVITY, EDIT_ACTIVITY } from '../store/activities/actionTypes';

const activitiesReducerDefaultState = {
  activities: {
    items: [],
  },
};

export default (state = activitiesReducerDefaultState, action) => {
  switch (action.type) {
    case ADD_ACTIVITY:
      return {
        activities: {
          items: [...state.activities.items, action.activity],
        },
      };
    case REMOVE_ACTIVITY:
      return {
        activities: {
          items: state.activities.items.filter(activity => activity.id !== action.id),
        },
      };
    case EDIT_ACTIVITY:
      return {
        activities: {
          items: state.activities.items.map(activity => {
            if (activity.id === action.id) {
              return {
                ...activity,
                ...action.updates,
              };
            }
            return activity;
          }),
        },
      };
    default:
      return state;
  }
};
