import {
  getActivitiesForDay,
  getActivityItems,
  getEditedActivity,
} from '../../../store/activities/selectors';
import { MONDAY } from '../../../constants/dates';
import testProps from '../../fixtures/props';
import testState from '../../fixtures/state';

describe('activities selectors', () => {
  it('should return activities for given day', () => {
    const result = getActivitiesForDay(testState.activities.items, MONDAY);
    expect(result).toEqual([testState.activities.items[1], testState.activities.items[2]]);
  });

  it('should return items array from state object', () => {
    const result = getActivityItems(testState);
    expect(result).toEqual(testState.activities.items);
  });

  it('should return edited activity by given props', () => {
    const result = getEditedActivity(testState, testProps);
    expect(result).toEqual(testState.activities.items[2]);
  });
});
