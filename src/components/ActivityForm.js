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
      error: '',
      // TODO: when you will use prop-types you will be able to improve this place ;)
      // TODO: I think, that now (looking at previous comments, maybe you will be able to
      // improve). If not, because activity will be able to be undefined, in separate PR
      // you should check lodash package and get method ;)
    };
  }

  onNameChange = e => this.setState({ name: e.target.value });

  onTeacherChange = e => this.setState({ teacher: e.target.value });

  onRoomChange = e => this.setState({ room: e.target.value });

  onClassNoChange = e => {
    const classNo = e.target.value;
    if (!classNo || classNo.match(/^[1-9]\d*$/)) {
      this.setState({ classNo });
    }
  };

  onDayChange = e => this.setState({ day: e.target.value });

  onBlur = e =>
    !e.target.value && this.setState({ error: `Please provide ${e.target.placeholder}` });

  onSubmit = e => {
    e.preventDefault();
    const { name, day, classNo, room, teacher } = this.state;
    if (!name || !day || !classNo || !teacher || !room) {
      // TODO: and then, this logic can be moved to Input.
      // You should have as many errors as required fields, separate ones.
      let errorText = '';
      if (!name) {
        errorText = `${errorText}Please provide Name. `;
      }
      if (!day) {
        errorText = `${errorText}Please provide Day. `;
      }
      if (!classNo) {
        errorText = `${errorText}Please provide Class Number. `;
      }
      if (!room) {
        errorText = `${errorText}Please provide Room. `;
      }
      if (!teacher) {
        errorText = `${errorText}Please provide Teacher. `;
      }
      this.setState({ error: errorText });
    } else {
      this.setState({ error: '' });
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
    const { name, day, classNo, room, teacher, error } = this.state;
    return (
      <div>
        {error && <p>{error}</p>}
        <form onSubmit={this.onSubmit}>
          <Input
            type="text"
            placeholder="Activity Name"
            value={name}
            onChange={this.onNameChange}
            onBlur={this.onBlur}
          />
          <Input
            type="text"
            placeholder="Teacher"
            value={teacher}
            onChange={this.onTeacherChange}
            onBlur={this.onBlur}
          />
          <Input
            type="text"
            placeholder="Room"
            value={room}
            onChange={this.onRoomChange}
            onBlur={this.onBlur}
          />
          <Input
            type="number"
            placeholder="Class Number"
            value={classNo}
            onChange={this.onClassNoChange}
            onBlur={this.onBlur}
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
