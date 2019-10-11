import database from '../../firebase/firebase';
import { ADD_ACTIVITY, REMOVE_ACTIVITY, EDIT_ACTIVITY } from './actionTypes';

export const addActivity = activity => ({
  type: ADD_ACTIVITY,
  activity,
});

export const startAddActivity = (activity = {}) => async dispatch => {
  try {
    const { key: id } = await database.ref('activities/items').push(activity);
    return dispatch(
      addActivity({
        id,
        ...activity,
      }),
    );
  } catch (error) {
    console.error(`Ops! ${error}`); // eslint-disable-line no-console
  }
};

export const removeActivity = id => ({
  type: REMOVE_ACTIVITY,
  id,
});

export const editActivity = (id, updates) => ({
  type: EDIT_ACTIVITY,
  id,
  updates,
});
