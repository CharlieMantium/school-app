export const getActivityItems = state => {
  return state.activities.items;
};

export const getEditedActivity = (state, props) => {
  return state.activities.items.find(activity => activity.id === props.match.params.id);
};
