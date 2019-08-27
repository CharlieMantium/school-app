import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

export default class ActivityForm extends React.Component {
  static propTypes = {
    activity: PropTypes.shape({
      classNo: PropTypes.string,
      day: PropTypes.string,
      id: PropTypes.string,
      name: PropTypes.string,
      room: PropTypes.string,
      teacher: PropTypes.string,
    }),
    onSubmit: PropTypes.func.isRequired,
  };

  static defaultProps = {
    activity: undefined,
  };

  constructor(props) {
    super(props);
    this.state = {
      classNo: props.activity ? props.activity.classNo : '',
      day: props.activity ? props.activity.day : '',
      name: props.activity ? props.activity.name : '',
      room: props.activity ? props.activity.room : '',
      teacher: props.activity ? props.activity.teacher : '',
      classNoError: '',
      nameError: '',
      roomError: '',
      teacherError: '',
      // TODO: when you will use prop-types you will be able to improve this place ;)
      // TODO: I think, that now (looking at previous comments, maybe you will be able to
      // improve). If not, because activity will be able to be undefined, in separate PR
      // you should check lodash package and get method ;)
    };
  }

  onNameChange = e => {
    this.setState({ name: e.target.value });
    this.setState({ nameError: '' });
  };

  onTeacherChange = e => {
    this.setState({ teacher: e.target.value });
    this.setState({ teacherError: '' });
  };

  onRoomChange = e => {
    this.setState({ room: e.target.value });
    this.setState({ roomError: '' });
  };

  onClassNoChange = e => {
    const classNo = e.target.value;
    if (!classNo || classNo.match(/^[1-9]\d*$/)) {
      this.setState({ classNo });
    }
    this.setState({ classNoError: '' });
  };

  onDayChange = e => this.setState({ day: e.target.value });

  onBlur = field => e =>
    !e.target.value && this.setState({ [field]: `Please provide ${e.target.placeholder}` });

  onSubmit = e => {
    e.preventDefault();
    this.setState({ nameError: '' });
    this.setState({ classNoError: '' });
    this.setState({ roomError: '' });
    this.setState({ teacherError: '' });
    const { name, day, classNo, room, teacher } = this.state;
    if (!name || !day || !classNo || !teacher || !room) {
      // TODO: and then, this logic can be moved to Input.
      // You should have as many errors as required fields, separate ones.
      if (!name) {
        this.setState({ nameError: 'Please provide Name.' });
      }
      if (!classNo) {
        this.setState({ classNoError: 'Please provide Class Number.' });
      }
      if (!room) {
        this.setState({ roomError: 'Please provide Room.' });
      }
      if (!teacher) {
        this.setState({ teacherError: 'Please provide Teacher.' });
      }
    } else {
      this.props.onSubmit({
        classNo,
        day,
        name,
        room,
        teacher,
      });
    }
  };

  render() {
    const {
      name,
      day,
      classNo,
      room,
      teacher,
      classNoError,
      nameError,
      roomError,
      teacherError,
    } = this.state;
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <Input
            type="text"
            placeholder="Activity Name"
            value={name}
            onChange={this.onNameChange}
            onBlur={this.onBlur('nameError')}
            errorMsg={nameError}
          />
          <Input
            type="text"
            placeholder="Teacher"
            value={teacher}
            onChange={this.onTeacherChange}
            onBlur={this.onBlur('teacherError')}
            errorMsg={teacherError}
          />
          <Input
            type="text"
            placeholder="Room"
            value={room}
            onChange={this.onRoomChange}
            onBlur={this.onBlur('roomError')}
            errorMsg={roomError}
          />
          <Input
            type="number"
            placeholder="Class Number"
            value={classNo}
            onChange={this.onClassNoChange}
            onBlur={this.onBlur('classNoError')}
            errorMsg={classNoError}
          />
          <select value={day} onChange={this.onDayChange} required>
            <option value="">Pick a day</option>
            <option value={1}>Monday</option>
            <option value={2}>Tuesday</option>
            <option value={3}>Wednesday</option>
            <option value={4}>Thursday</option>
            <option value={5}>Friday</option>
            <option value={6}>Saturday</option>
            <option value={7}>Sunday</option>
          </select>
          <button type="submit">Add Activity</button>
        </form>
      </div>
    );
  }
}
