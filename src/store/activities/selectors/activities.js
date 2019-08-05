export default (activities, { text }) => {
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

//TODO: try to create a function, which gets name/day/teacher/ etc
// and text and returns what it should returns.
// Target of this selector is not clear for me. Can you elaborate?
