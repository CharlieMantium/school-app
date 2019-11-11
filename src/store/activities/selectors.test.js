import { MONDAY } from 'constants/dates';
import testProps from 'tests/fixtures/props';
import testState from 'tests/fixtures/state';

import { getActivitiesForDay, getActivityItems, getEditedActivity } from './selectors';

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
