import uuid from 'uuid-v4';

export const addActivity = ({ classNo, day, name, room, teacher } = {}) => ({
  type: 'ADD_ACTIVITY',
  activity: {
    classNo,
    day,
    id: uuid(),
    name,
    room,
    teacher,
  },
});

export const removeActivity = id => ({
  type: 'REMOVE_ACTIVITY',
  id,
});

export const editActivity = (id, updates) => ({
  type: 'EDIT_ACTIVITY',
  id,
  updates,
});
