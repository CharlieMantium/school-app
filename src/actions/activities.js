import uuid from 'uuid';

export const addActivity = (
  {
    name = 'Just stuff',
    teacher = 'Anonymous',
    day,
    classNo,
    room = 'Anywhere'
  } = {}
) => ({
  type: 'ADD_ACTIVITY',
  activity: {
    id: uuid(),
    name,
    teacher,
    day,
    classNo,
    room
  }
})

export const removeActivity = ({id} = {}) => ({
  type: 'REMOVE_ACTIVITY',
  id
});

export const editActivity = (id, updates) => ({
  type: 'EDIT_ACTIVITY',
  id,
  updates
});
