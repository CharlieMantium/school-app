export default (activities, {text}) => {
  return activities.filter(({ name, day, teacher, room }) => {
    const lowerCaseText = text.toLowerCase();
    const lowerCaseName = name.toLowerCase();
    const lowerCaseDay = day.toLowerCase();
    const lowetCaseTeacher = teacher.toLowerCase();
    const lowerCaseRoom = room.toLowerCase();
    const textMatchName = lowerCaseName.includes(lowerCaseText);
    const textMatchDay = lowerCaseDay.includes(lowerCaseText);
    const textMatchTeacher = lowetCaseTeacher.includes(lowerCaseText);
    const textMatchRoom = lowerCaseRoom.includes(lowerCaseText);
    return textMatchName || textMatchDay || textMatchTeacher || textMatchRoom;
  });
};
