export const generateActivitiesItemsPath = (uid, id) =>
  id ? `users/${uid}/activities/items/${id}` : `users/${uid}/activities/items`;
