import { addActivity, removeActivity, editActivity } from '../../../store/activities/actions';
import { MONDAY } from '../../../constants/dates';

test('should setup add activity action object', () => {
  const activityData = {
    classNo: '123',
    day: MONDAY,
    name: 'jumping',
    room: 'kitchen',
    teacher: 'police man',
  };
  const action = addActivity(activityData);
  expect(action).toEqual({
    type: 'ADD_ACTIVITY',
    activity: {
      ...activityData,
      id: expect.any(String),
    },
  });
});

test('should setup remove activity action object', () => {
  const action = removeActivity('123abc');
  expect(action).toEqual({
    type: 'REMOVE_ACTIVITY',
    id: '123abc',
  });
});

test('should setup edit activity action object', () => {
  const action = editActivity('111aaa', { name: 'mmmm' });
  expect(action).toEqual({
    type: 'EDIT_ACTIVITY',
    id: '111aaa',
    updates: {
      name: 'mmmm',
    },
  });
});
