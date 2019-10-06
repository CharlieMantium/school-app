import database from '../../firebase/firebase';

export const addActivity = activity => ({
  type: 'ADD_ACTIVITY',
  activity,
});

export const startAddActivity = (activityData = {}) => {
  return dispatch => {
    const { classNo, day, name, room, teacher } = activityData;
    const activity = { classNo, day, name, room, teacher };
    return database
      .ref('activities/items')
      .push(activity)
      .then(ref => {
        dispatch(
          addActivity({
            id: ref.key,
            ...activity,
          }),
        );
      });
  };
};

export const removeActivity = id => ({
  type: 'REMOVE_ACTIVITY',
  id,
});

export const editActivity = (id, updates) => ({
  type: 'EDIT_ACTIVITY',
  id,
  updates,
});
