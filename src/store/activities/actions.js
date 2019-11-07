import database from 'firebase/firebase';
import { generateActivitiesItemsPath } from 'helpers/paths';
import { ADD_ACTIVITY, REMOVE_ACTIVITY, EDIT_ACTIVITY, SET_ACTIVITIES } from './actionTypes';

export const addActivity = activity => ({
  type: ADD_ACTIVITY,
  activity,
});

export const startAddActivity = (activity = {}) => async dispatch => {
  try {
    const { key: id } = await database.ref(generateActivitiesItemsPath()).push(activity);
    return dispatch(
      addActivity({
        id,
        ...activity,
      }),
    );
  } catch (error) {
    return console.error(`Ops! ${error}`); // eslint-disable-line no-console
  }
};

export const removeActivity = id => ({
  type: REMOVE_ACTIVITY,
  id,
});

export const startRemoveActivity = id => async dispatch => {
  try {
    await database.ref(generateActivitiesItemsPath(id)).remove();
    return dispatch(removeActivity(id));
  } catch (error) {
    return console.error(`Ops! ${error}`); // eslint-disable-line no-console
  }
};

export const editActivity = (id, updates) => ({
  type: EDIT_ACTIVITY,
  id,
  updates,
});

export const startEditActivity = (id, updates) => async dispatch => {
  try {
    await database.ref(generateActivitiesItemsPath(id)).update(updates);
    return dispatch(editActivity(id, updates));
  } catch (error) {
    return console.error(`Ops! ${error}`); // eslint-disable-line no-console
  }
};

export const setActivities = activities => ({
  type: SET_ACTIVITIES,
  activities,
});

export const startSetActivities = () => async dispatch => {
  try {
    const snapshot = await database.ref(generateActivitiesItemsPath()).once('value');
    const activities = [];
    snapshot.forEach(childSnapshot => {
      activities.push({ id: childSnapshot.key, ...childSnapshot.val() });
    });
    return dispatch(setActivities(activities));
  } catch (error) {
    return console.error(`Ops! ${error}`); // eslint-disable-line no-console
  }
};
