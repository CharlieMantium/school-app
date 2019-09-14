import {
  getActivitiesForDay,
  getActivityItems,
  getEditedActivity,
} from '../../../store/activities/selectors';
import { MONDAY } from '../../../constants/dates';
import testProps from '../../fixtures/props';
import testState from '../../fixtures/state';

test('should return activities for given day', () => {
  const result = getActivitiesForDay(testState.activities.items, MONDAY);
  expect(result).toEqual([testState.activities.items[1], testState.activities.items[2]]);
});

test('should return items array from state object', () => {
  const result = getActivityItems(testState);
  expect(result).toEqual(testState.activities.items);
});

test('should return edited activity by given props', () => {
  const result = getEditedActivity(testState, testProps);
  expect(result).toEqual(testState.activities.items[2]);
});