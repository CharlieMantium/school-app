import React from 'react';

export default class ActivityForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classNo: props.activity ? props.activity.classNo : '',
      day: props.activity ? props.activity.day : '',
      name: props.activity ? props.activity.name : '',
      room: props.activity ? props.activity.room : '',
      teacher: props.activity ? props.activity.teacher : '',
      error: ''
    };
  };

  onNameChange = e => this.setState({name: e.target.value});

  onTeacherChange = e => this.setState({teacher: e.target.value});

  onRoomChange = e => this.setState({room: e.target.value});

  onClassNoChange = (e) => {
    const classNo = e.target.value;
    if (!classNo || classNo.match(/^[1-9]\d*$/)) {
      this.setState({classNo});
    };
  };

  onDayChange = (e) => this.setState({day: e.target.value});

  onSubmit = (e) => {
    e.preventDefault();
    const { name, day, classNo, room, teacher } = this.state;
    if (!name || !day || !classNo) {
      this.setState({error: 'Please provide Activity Name, Day and Class Number!'});
    } else {
      this.setState({error: ''});
      this.props.onSubmit({
        classNo,
        day,
        name,
        room,
        teacher
      });
    };
  };

  render() {
    const { name, day, classNo, room, teacher, error } = this.state;
    return (
      <div>
        {error && <p>{error}</p>}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Activity Name"
            autoFocus
            value={name}
            onChange={this.onNameChange}
          />
          <input
            type="text"
            placeholder="Teacher"
            value={teacher}
            onChange={this.onTeacherChange}
          />
          <input
            type="text"
            placeholder="Room"
            value={room}
            onChange={this.onRoomChange}
          />
          <input
            type="number"
            placeholder="Class Number"
            value={classNo}
            onChange={this.onClassNoChange}
          />
          <select
            value={day}
            onChange={this.onDayChange}
            required={true}
          >
            <option value=''>Pick a day</option>
            <option value={1}>Monday</option>
            <option value={2}>Tuesday</option>
            <option value={3}>Wednesday</option>
            <option value={4}>Thursday</option>
            <option value={5}>Friday</option>
            <option value={6}>Saturday</option>
            <option value={7}>Sunday</option>
          </select>
          <button>Add Activity</button>
        </form>
      </div>
    )
  }
}
