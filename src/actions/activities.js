import uuid from 'uuid-v4';

export const addActivity = ({
  name = 'Just stuff',
  room = 'Anywhere',
  teacher = 'Anonymous',
  classNo,
  day,
} = {}) => ({
  type: 'ADD_ACTIVITY',
  activity: {
    id: uuid(),
    name,
    room,
    teacher,
    classNo,
    day,
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
