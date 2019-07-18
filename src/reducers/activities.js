const activitiesReducerDefaultState = [];

export default (state = activitiesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_ACTIVITY':
      return [
        ...state,
        action.activity
      ];
    case 'REMOVE_ACTIVITY':
      return state.filter(({id}) => id !== action.id);
    case 'EDIT_ACTIVITY':
      return state.map((activity) => {
        if (activity.id === action.id) {
          return {
            ...activity,
            ...action.updates
          }
        } else {
          return activity;
        }
      });
    default:
      return state;
  }
};
