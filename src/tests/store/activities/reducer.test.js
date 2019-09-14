import activitiesReducer from '../../../store/activities/reducer';
import testState from '../../fixtures/state';
import activity from '../../fixtures/activity';
import {
  ADD_ACTIVITY,
  REMOVE_ACTIVITY,
  EDIT_ACTIVITY,
} from '../../../store/activities/actionTypes';

test('should set default activities state', () => {
  const initAction = { type: '@@INIT' };
  const state = activitiesReducer(undefined, initAction);
  expect(state).toEqual({
    activities: {
      items: [],
    },
  });
});

test('should add an activity', () => {
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

test('should remove activity by id', () => {
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

test('should not remove activities when id not found', () => {
  const id = '123';
  const action = {
    type: REMOVE_ACTIVITY,
    id,
  };
  const state = activitiesReducer(testState, action);
  expect(state).toEqual(testState);
});

test('should edit an activity', () => {
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

test('should not edit an activity if id not found', () => {
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
