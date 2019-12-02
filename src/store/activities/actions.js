import database from 'firebase/firebase';
import { createIntl, createIntlCache } from 'react-intl';
import flatten from 'flat';

import { generateActivitiesItemsPath } from 'helpers/paths';
import { errorNotification, successNotification } from 'components/elements';
import messagesPL from 'translations/pl.json';
import messagesEN from 'translations/en.json';

import { ADD_ACTIVITY, REMOVE_ACTIVITY, EDIT_ACTIVITY, SET_ACTIVITIES } from './actionTypes';

const messages = {
  pl: flatten(messagesPL),
  en: flatten(messagesEN),
};

const language = navigator.language.split(/[-_]/)[0];

const intl = createIntl(
  {
    locale: language,
    messages: messages[language],
  },
  createIntlCache,
);

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
      successNotification(
        intl.formatMessage({
          id: 'notification.success.activityAdd',
          defaultMessage: 'Activity Added!',
        }),
      ),
    );
  } catch (error) {
    return errorNotification(
      intl.formatMessage(
        {
          id: 'notification.error.activityAdd',
          defaultMessage: error,
        },
        { error },
      ),
    );
  }
};

export const removeActivity = id => ({
  type: REMOVE_ACTIVITY,
  id,
});

export const startRemoveActivity = id => async dispatch => {
  try {
    await database.ref(generateActivitiesItemsPath(id)).remove();
    return dispatch(
      removeActivity(id),
      successNotification(
        intl.formatMessage({
          id: 'notification.success.activityRemove',
          defaultMessage: 'Activity Removed',
        }),
      ),
    );
  } catch (error) {
    return errorNotification(
      intl.formatMessage(
        {
          id: 'notification.error.activityRemove',
          defaultMessage: error,
        },
        { error },
      ),
    );
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
    return dispatch(
      editActivity(id, updates),
      successNotification(
        intl.formatMessage({
          id: 'notification.success.activityEdit',
          defaultMessage: 'Activity Edited!',
        }),
      ),
    );
  } catch (error) {
    return errorNotification(
      intl.formatMessage(
        {
          id: 'notification.error.activityEdit',
          defaultMessage: error,
        },
        { error },
      ),
    );
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
    return errorNotification(
      intl.formatMessage(
        {
          id: 'notification.error.activitiesLoad',
          defaultMessage: error,
        },
        { error },
      ),
    );
  }
};
