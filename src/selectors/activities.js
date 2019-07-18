export default (activities, {text}) => {
  return activities.filter((activity) => {
    const textMatchName = activity.name.toLowerCase().includes(text.toLowerCase());
    const textMatchDay = activity.day.toLowerCase().includes(text.toLowerCase());
    const textMatchTeacher = activity.teacher.toLowerCase().includes(text.toLowerCase());
    const textMatchRoom = activity.room.toLowerCase().includes(text.toLowerCase());
    return textMatchName || textMatchDay || textMatchTeacher || textMatchRoom;
  });
};