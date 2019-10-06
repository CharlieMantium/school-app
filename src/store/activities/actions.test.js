import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import database from '../../firebase/firebase';

import { startAddActivity, addActivity, removeActivity, editActivity } from './actions';
import { ADD_ACTIVITY } from './actionTypes';
import testState from '../../tests/fixtures/state';
import testActivityData from '../../tests/fixtures/activity';

const createMockStore = configureMockStore([thunk]);

describe('activities actions', () => {
  it('should setup add activity action object', () => {
    const activityData = testState.activities.items[2];
    const action = addActivity(activityData);
    expect(action).toEqual({
      type: 'ADD_ACTIVITY',
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
      type: 'REMOVE_ACTIVITY',
      id: '123abc',
    });
  });

  it('should setup edit activity action object', () => {
    const action = editActivity('111aaa', { name: 'mmmm' });
    expect(action).toEqual({
      type: 'EDIT_ACTIVITY',
      id: '111aaa',
      updates: {
        name: 'mmmm',
      },
    });
  });
});
