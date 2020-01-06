import {
  ADD_ACTIVITY,
  REMOVE_ACTIVITY,
  EDIT_ACTIVITY,
  SET_ACTIVITIES,
  SET_FILTER,
} from './actionTypes';

const activitiesReducerDefaultState = {
  items: [],
  filterKey: '',
};

export default (state = activitiesReducerDefaultState, action) => {
  switch (action.type) {
    case ADD_ACTIVITY:
      return {
        items: [...state.items, action.activity],
        filterKey: state.filterKey,
      };
    case REMOVE_ACTIVITY:
      return {
        items: state.items.filter(activity => activity.id !== action.id),
        filterKey: state.filterKey,
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
        filterKey: state.filterKey,
      };
    case SET_ACTIVITIES:
      return {
        items: action.activities,
        filterKey: state.filterKey,
      };
    case SET_FILTER:
      return {
        items: state.items,
        filterKey: action.filterText,
      };
    default:
      return state;
  }
};
