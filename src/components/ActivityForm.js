import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import Input from './Input';
import { validatePositive, validateDot } from '../helpers/validators';
import { daysOfTheWeek } from '../constants/dates';

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
    activity: {
      classNo: '',
      day: '',
      name: '',
      room: '',
      teacher: '',
    },
  };

  constructor(props) {
    super(props);
    this.state = {
      classNo: props.activity.classNo,
      day: props.activity.day,
      name: props.activity.name,
      room: props.activity.room,
      teacher: props.activity.teacher,
      classNoError: '',
      nameError: '',
      roomError: '',
      teacherError: '',
    };
  }

  onInputValueChange = field => e => {
    const inputValue = e.target.value;
    if (field === 'classNo') {
      if (validatePositive(inputValue) && validateDot(inputValue)) {
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
      if (!_.isEmpty(errors)) {
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
        <form className="form" onSubmit={this.onSubmit}>
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
            type="number"
            step="1"
            placeholder="Class Number"
            value={classNo}
            onChange={this.onInputValueChange('classNo')}
            onBlur={this.onBlur('classNoError')}
            errorMsg={classNoError}
          />
          <select
            className="form__select"
            value={day}
            onChange={this.onInputValueChange('day')}
            required
          >
            <option className="form__selectOption" value="">
              Pick a day
            </option>
            {daysOfTheWeek.map(weekDay => (
              <option className="form__selectOption" value={weekDay} key={weekDay}>
                {weekDay}
              </option>
            ))}
          </select>
          {/* TODO: You should start to think about separate Dropdown component. It's a hard thing to do,
          using native html, it's harder to style options, etc. You could build it by yourself,
          but also you can use on of the most popular react packages (atm) - rc-dropdown or downshift.
          It will be big exercise. So, do it later (when you start real styling - do it also quite asap).
          But by separate pr only for dropdown. */}
          <button type="submit">Add Activity</button>
        </form>
      </div>
    );
  }
}
