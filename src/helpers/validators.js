export const validateDot = input => {
  return !input.includes('.');
};

export const validatePositive = input => {
  return Number(input) > 0;
};

export const validateFreeTimeSlot = (activity, currentActivities) => {
  return !currentActivities.some(
    item => item.day === activity.day && item.activityOrdinal === activity.activityOrdinal,
  );
};
