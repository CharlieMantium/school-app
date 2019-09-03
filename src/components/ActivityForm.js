import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import { validateNumber, validatePositive, validateInteger } from '../helpers/validators';

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

  onInputValueChange = field => e => {
    const inputValue = e.target.value;
    if (field === 'classNo') {
      if (
        validateNumber(inputValue) &&
        validatePositive(inputValue) &&
        validateInteger(inputValue)
      ) {
        this.setState({
          [field]: inputValue,
          [`${field}Error`]: '',
        });
      }
    } else {
      this.setState({
        [field]: inputValue,
        [`${field}Error`]: '',
      });
    }
  };

  onBlur = field => e => !e.target.value && this.setState({ [field]: 'Required' });

  onSubmit = e => {
    e.preventDefault();
    this.setState({
      nameError: '',
      classNoError: '',
      roomError: '',
      teacherError: '',
    });
    const { name, day, classNo, room, teacher } = this.state;
    const errors = {};
    const errorMsg = 'Required';
    if (!name || !day || !classNo || !teacher || !room) {
      if (!name) {
        errors.nameError = errorMsg;
      }
      if (!classNo) {
        errors.classNoError = errorMsg;
      }
      if (!room) {
        errors.roomError = errorMsg;
      }
      if (!teacher) {
        errors.teacherError = errorMsg;
      }
      if (Object.keys(errors).length > 0) {
        this.setState(errors);
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
            onChange={this.onInputValueChange('name')}
            onBlur={this.onBlur('nameError')}
            errorMsg={nameError}
          />
          <Input
            type="text"
            placeholder="Teacher"
            value={teacher}
            onChange={this.onInputValueChange('teacher')}
            onBlur={this.onBlur('teacherError')}
            errorMsg={teacherError}
          />
          <Input
            type="text"
            placeholder="Room"
            value={room}
            onChange={this.onInputValueChange('room')}
            onBlur={this.onBlur('roomError')}
            errorMsg={roomError}
          />
          <Input
            type="text"
            placeholder="Class Number"
            value={classNo}
            onChange={this.onInputValueChange('classNo')}
            onBlur={this.onBlur('classNoError')}
            errorMsg={classNoError}
          />
          <select value={day} onChange={this.onInputValueChange('day')} required>
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
