import {
  ADD_ACTIVITY,
  REMOVE_ACTIVITY,
  EDIT_ACTIVITY,
  SET_ACTIVITIES,
  SET_FILTER,
} from './actionTypes';

const activitiesReducerDefaultState = {
  items: [],
  filter: '',
};

export default (state = activitiesReducerDefaultState, action) => {
  switch (action.type) {
    case ADD_ACTIVITY:
      return {
        items: [...state.items, action.activity],
        filter: state.filter,
      };
    case REMOVE_ACTIVITY:
      return {
        items: state.items.filter(activity => activity.id !== action.id),
        filter: state.filter,
      };
    case EDIT_ACTIVITY:
      return {
        items: state.items.map(activity => {
          if (activity.id === action.id) {
            return {
              ...activity,
              ...action.updates,
            };
          }
          return activity;
        }),
        filter: state.filter,
      };
    case SET_ACTIVITIES:
      return {
        items: action.activities,
        filter: state.filter,
      };
    case SET_FILTER:
      return {
        items: state.items,
        filter: action.filterText,
      };
    default:
      return state;
  }
};
