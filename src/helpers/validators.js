export const validateDot = input => {
  return !input.includes('.');
};

export const validatePositive = input => {
  return Number(input) > 0;
};

export const validateFreeTimeSlot = (
  { day, activityOrdinal },
  { editedActivityDay, editedActivityOrdinal },
  currentActivities,
) =>
  (day === editedActivityDay && activityOrdinal === editedActivityOrdinal) ||
  !currentActivities.some(item => item.day === day && item.activityOrdinal === activityOrdinal);
