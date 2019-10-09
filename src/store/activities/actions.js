import database from '../../firebase/firebase';
import { ADD_ACTIVITY, REMOVE_ACTIVITY, EDIT_ACTIVITY } from './actionTypes';

export const addActivity = activity => ({
  type: ADD_ACTIVITY,
  activity,
});

export const startAddActivity = (activity = {}) => dispatch => {
  try {
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
  } catch (error) {
    return console.error(`Opps! ${error}`); // eslint-disable-line no-console
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

// TODO: you don't have catch if error occurres (in startAddActivity).
// Try to do in async/awat fashion, using try-catch block. You can do it in separate PR
