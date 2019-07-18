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
  onNameChange = (e) => {
    const name = e.target.value;
    this.setState(() => ({name}));
  };
  onTeacherChange = (e) => {
    const teacher = e.target.value;
    this.setState(() => ({teacher}));
  };
  onRoomChange = (e) => {
    const room = e.target.value;
    this.setState(() => ({room}));
  };
  onClassNoChange = (e) => {
    const classNo = e.target.value;
    if (!classNo || classNo.match(/^[1-9]\d*$/)) {
      this.setState(() => ({classNo}));
    };
  };
  onDayChange = (e) => {
    const day = e.target.value;
    this.setState(() => ({day}));
  };
  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.name || !this.state.day || !this.state.classNo) {
      this.setState(() => ({error: 'Please provide Activity Name, Day and Class Number!'}))
    } else {
      this.setState(() => ({error: ''}))
      this.props.onSubmit({
        classNo: this.state.classNo,
        day: this.state.day,
        name: this.state.name,
        room: this.state.room,
        teacher: this.state.teacher,
      })
    }
  };
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Activity Name"
            autoFocus
            value={this.state.name}
            onChange={this.onNameChange}
          />
          <input
            type="text"
            placeholder="Teacher"
            value={this.state.teacher}
            onChange={this.onTeacherChange}
          />
          <input
            type="text"
            placeholder="Room"
            value={this.state.room}
            onChange={this.onRoomChange}
          />
          <input
            type="number"
            placeholder="Class Number"
            value={this.state.classNo}
            onChange={this.onClassNoChange}
          />
          <select
            value={this.state.day}
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
