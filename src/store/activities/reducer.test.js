import testState from 'tests/fixtures/state';
import activity from 'tests/fixtures/activity';
import activitiesReducer from './reducer';
import { ADD_ACTIVITY, REMOVE_ACTIVITY, EDIT_ACTIVITY, SET_ACTIVITIES } from './actionTypes';

describe('activities reducer', () => {
  it('should set default activities state', () => {
    const initAction = { type: '@@INIT' };
    const state = activitiesReducer(undefined, initAction);
    expect(state).toEqual({
      activities: {
        items: [],
      },
    });
  });

  it('should add an activity', () => {
    const action = {
      type: ADD_ACTIVITY,
      activity,
    };
    const state = activitiesReducer(testState, action);
    expect(state).toEqual({
      activities: {
        items: [...testState.activities.items, activity],
      },
    });
  });

  it('should remove activity by id', () => {
    const id = '3';
    const action = {
      type: REMOVE_ACTIVITY,
      id,
    };
    const state = activitiesReducer(testState, action);
    expect(state).toEqual({
      activities: {
        items: [...testState.activities.items.filter(activityItem => activityItem.id !== id)],
      },
    });
  });

  it('should not remove activities when id not found', () => {
    const id = '123';
    const action = {
      type: REMOVE_ACTIVITY,
      id,
    };
    const state = activitiesReducer(testState, action);
    expect(state).toEqual(testState);
  });

  it('should edit an activity', () => {
    const { id } = testState.activities.items[1];
    const name = 'playing video games';
    const action = {
      type: EDIT_ACTIVITY,
      id,
      updates: {
        name,
      },
    };
    const state = activitiesReducer(testState, action);
    expect(state.activities.items[1].name).toBe(name);
  });

  it('should not edit an activity if id not found', () => {
    const id = 'not existing id';
    const name = 'playing video games';
    const action = {
      type: EDIT_ACTIVITY,
      id,
      updates: {
        name,
      },
    };
    const state = activitiesReducer(testState, action);
    expect(state).toEqual(state);
  });

  it('should set expenses', () => {
    const action = {
      type: SET_ACTIVITIES,
      activities: testState.activities.items,
    };
    const state = activitiesReducer({}, action);
    expect(state).toEqual(testState);
  });
});
