import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import database from '../../firebase/firebase';
import {
  addActivity,
  startAddActivity,
  removeActivity,
  startRemoveActivity,
  editActivity,
  startEditActivity,
  setActivities,
  startSetActivities,
} from './actions';
import { ADD_ACTIVITY, REMOVE_ACTIVITY, EDIT_ACTIVITY, SET_ACTIVITIES } from './actionTypes';
import testState from '../../tests/fixtures/state';
import testActivityData from '../../tests/fixtures/activity';
import { generateActivitiesItemsPath } from '../../helpers/paths';

const createMockStore = configureMockStore([thunk]);

beforeEach(done => {
  const activitiesData = {};
  testState.activities.items.forEach(({ id, name, room, day, activityOrdinal, teacher }) => {
    activitiesData[id] = { name, room, day, activityOrdinal, teacher };
  });
  database
    .ref(generateActivitiesItemsPath())
    .set(activitiesData)
    .then(() => done());
});

describe('activities actions', () => {
  it('should setup add activity action object', () => {
    const activityData = testState.activities.items[2];
    const action = addActivity(activityData);
    expect(action).toEqual({
      type: ADD_ACTIVITY,
      activity: testState.activities.items[2],
    });
  });

  it('should add activity to database and store', done => {
    const store = createMockStore({});
    store
      .dispatch(startAddActivity(testActivityData))
      .then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
          type: ADD_ACTIVITY,
          activity: {
            id: expect.any(String),
            ...testActivityData,
          },
        });
        return database.ref(`activities/items/${actions[0].activity.id}`).once('value');
      })
      .then(snapshot => {
        expect(snapshot.val()).toEqual(testActivityData);
        done();
      });
  });

  it('should setup remove activity action object', () => {
    const action = removeActivity('123abc');
    expect(action).toEqual({
      type: REMOVE_ACTIVITY,
      id: '123abc',
    });
  });

  it('should remove activity from firebase', done => {
    const store = createMockStore({});
    const { id } = testState.activities.items[2];
    store
      .dispatch(startRemoveActivity(id))
      .then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
          type: REMOVE_ACTIVITY,
          id,
        });
        return database.ref(generateActivitiesItemsPath(id)).once('value');
      })
      .then(snapshot => {
        expect(snapshot.val()).toBeFalsy();
        done();
      });
  });

  it('should setup edit activity action object', () => {
    const action = editActivity('111aaa', { name: 'mmmm' });
    expect(action).toEqual({
      type: EDIT_ACTIVITY,
      id: '111aaa',
      updates: {
        name: 'mmmm',
      },
    });
  });

  it('should edit activity on firebase', done => {
    const store = createMockStore({});
    const { id, activityOrdinal, room, teacher, day } = testState.activities.items[2];
    const updatedName = 'woooork';
    const updates = {
      name: updatedName,
    };
    store
      .dispatch(startEditActivity(id, updates))
      .then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
          type: EDIT_ACTIVITY,
          id,
          updates,
        });
        return database.ref(generateActivitiesItemsPath(id)).once('value');
      })
      .then(snapshot => {
        expect(snapshot.val()).toEqual({
          name: updatedName,
          activityOrdinal,
          room,
          teacher,
          day,
        });
        done();
      });
  });

  it('should setup set activities action object', () => {
    const action = setActivities(testState.activities.items);
    expect(action).toEqual({
      type: SET_ACTIVITIES,
      activities: testState.activities.items,
    });
  });

  it('should fetch activities from firebase', done => {
    const store = createMockStore({});
    store.dispatch(startSetActivities()).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: SET_ACTIVITIES,
        activities: testState.activities.items,
      });
      done();
    });
  });
});
