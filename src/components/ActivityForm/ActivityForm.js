import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import { validatePositive, validateDot, validateFreeTimeSlot } from 'helpers/validators';
import { Button } from 'styles/elements/Button';
import { daysOfTheWeek } from 'constants/dates';
import { spacing } from 'styles/base';
import activityPropTypeShape from 'prop-types/activity';

import Input from '../Input';

const SelectAndButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${spacing.xlSize} 0;
`;

export default class ActivityForm extends React.Component {
  static propTypes = {
    activity: PropTypes.shape({
      activityOrdinal: PropTypes.string,
      day: PropTypes.string,
      id: PropTypes.string,
      name: PropTypes.string,
      room: PropTypes.string,
      teacher: PropTypes.string,
    }),
    onSubmit: PropTypes.func.isRequired,
    currentActivities: PropTypes.arrayOf(PropTypes.shape(activityPropTypeShape)),
  };

  static defaultProps = {
    activity: {
      activityOrdinal: '',
      day: '',
      name: '',
      room: '',
      teacher: '',
    },
    currentActivities: [],
  };

  constructor(props) {
    super(props);
    this.state = {
      currentActivities: props.currentActivities,
      activityOrdinal: props.activity.activityOrdinal,
      day: props.activity.day,
      name: props.activity.name,
      room: props.activity.room,
      teacher: props.activity.teacher,
      activityOrdinalError: '',
      nameError: '',
      roomError: '',
      teacherError: '',
    };
  }

  onInputValueChange = field => e => {
    const inputValue = e.target.value;
    if (field === 'activityOrdinal') {
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

  onBlur = field => e => !e.target.value && this.setState({ [field]: 'form.error.required' });

  onSubmit = e => {
    e.preventDefault();
    this.setState({
      nameError: '',
      activityOrdinalError: '',
      roomError: '',
      teacherError: '',
    });
    const { name, day, activityOrdinal, room, teacher, currentActivities } = this.state;
    const errors = {};
    const errorMsg = 'form.error.required';
    if (
      !name ||
      !day ||
      !activityOrdinal ||
      !teacher ||
      !room ||
      !validateFreeTimeSlot({ day, activityOrdinal }, currentActivities)
    ) {
      if (!name) {
        errors.nameError = errorMsg;
      }
      if (!activityOrdinal) {
        errors.activityOrdinalError = errorMsg;
      }
      if (!room) {
        errors.roomError = errorMsg;
      }
      if (!teacher) {
        errors.teacherError = errorMsg;
      }
      if (!validateFreeTimeSlot({ day, activityOrdinal }, currentActivities)) {
        errors.activityOrdinalError = 'form.error.occupied';
      }
      if (!_.isEmpty(errors)) {
        this.setState(errors);
      }
    } else {
      this.props.onSubmit({
        activityOrdinal,
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
      activityOrdinal,
      room,
      teacher,
      activityOrdinalError,
      nameError,
      roomError,
      teacherError,
    } = this.state;
    return (
      <form onSubmit={this.onSubmit} data-test="form">
        <Input
          type="text"
          placeholder="Activity Name"
          value={name}
          onChange={this.onInputValueChange('name')}
          onBlur={this.onBlur('nameError')}
          errorMsg={nameError}
          data-test="input-component-name"
        />
        <Input
          type="text"
          placeholder="Teacher"
          value={teacher}
          onChange={this.onInputValueChange('teacher')}
          onBlur={this.onBlur('teacherError')}
          errorMsg={teacherError}
          data-test="input-component-teacher"
        />
        <Input
          type="text"
          placeholder="Room"
          value={room}
          onChange={this.onInputValueChange('room')}
          onBlur={this.onBlur('roomError')}
          errorMsg={roomError}
          data-test="input-component-room"
        />
        <Input
          type="number"
          step="1"
          placeholder="Class Number"
          value={activityOrdinal}
          onChange={this.onInputValueChange('activityOrdinal')}
          onBlur={this.onBlur('activityOrdinalError')}
          errorMsg={activityOrdinalError}
          data-test="input-component-activityOrdinal"
        />
        <SelectAndButtonWrapper>
          <select
            value={day}
            onChange={this.onInputValueChange('day')}
            required
            data-test="select-day"
          >
            <FormattedMessage id="form.activityFormSelectDefault" defaultMessage="Pick a day">
              {value => (
                <option value="" data-test="select-option-default">
                  {value}
                </option>
              )}
            </FormattedMessage>
            {daysOfTheWeek.map(weekDay => (
              <FormattedMessage id={`weekDays.${weekDay}`} defaultMessage={weekDay} key={weekDay}>
                {value => (
                  <option value={weekDay} data-test={`select-option-${weekDay}`}>
                    {value}
                  </option>
                )}
              </FormattedMessage>
            ))}
          </select>
          {/* TODO: You should start to think about separate Dropdown component. It's a hard thing to do,
          using native html, it's harder to style options, etc. You could build it by yourself,
          but also you can use on of the most popular react packages (atm) - rc-dropdown or downshift.
          It will be big exercise. So, do it later (when you start real styling - do it also quite asap).
          But by separate pr only for dropdown. */}
          <Button type="submit" data-test="button-submit">
            <FormattedMessage
              id={name ? 'form.button.activityFormBtnEdit' : 'form.button.activityFormBtnAdd'}
              defaultMessage={name ? 'Edit Activity' : 'Add Activity'}
            />
          </Button>
        </SelectAndButtonWrapper>
      </form>
    );
  }
}
