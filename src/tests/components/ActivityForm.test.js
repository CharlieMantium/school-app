import React from 'react';
import { shallow } from 'enzyme';

import ActivityForm from '../../components/ActivityForm';
import testState from '../fixtures/state';
import Input from '../../components/Input';
import shouldRenderErrorOnBlur from '../fixtures/shouldRenderErrorOnBlur';

describe('ActivityForm', () => {
  it('should render ActivityForm correctly', () => {
    const wrapper = shallow(<ActivityForm onSubmit={() => {}} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render ActivityForm with testState', () => {
    const wrapper = shallow(
      <ActivityForm on onSubmit={() => {}} activity={testState.activities.items[1]} />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should set errorMsg in inputs after invalid form submition', () => {
    const wrapper = shallow(<ActivityForm onSubmit={() => {}} />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit', {
      preventDefault: () => {},
    });
    expect(wrapper.state('classNoError').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
  });

  it('should set name on input change', () => {
    const value = 'New name';
    const wrapper = shallow(<ActivityForm on onSubmit={() => {}} />);
    wrapper
      .find(Input)
      .at(0)
      .simulate('change', {
        target: { value },
      });
    expect(wrapper.state('name')).toBe(value);
  });

  it('should set teacher on input change', () => {
    const value = 'New teacher';
    const wrapper = shallow(<ActivityForm on onSubmit={() => {}} />);
    wrapper
      .find(Input)
      .at(1)
      .simulate('change', {
        target: { value },
      });
    expect(wrapper.state('teacher')).toBe(value);
  });

  it('should set room on input change', () => {
    const value = 'New room';
    const wrapper = shallow(<ActivityForm on onSubmit={() => {}} />);
    wrapper
      .find(Input)
      .at(2)
      .simulate('change', {
        target: { value },
      });
    expect(wrapper.state('room')).toBe(value);
  });

  it('should set classNo on input change', () => {
    const value = '123';
    const wrapper = shallow(<ActivityForm on onSubmit={() => {}} />);
    wrapper
      .find(Input)
      .at(3)
      .simulate('change', {
        target: { value },
      });
    expect(wrapper.state('classNo')).toBe(value);
  });

  it('should set day on input change', () => {
    const value = 'new day';
    const wrapper = shallow(<ActivityForm on onSubmit={() => {}} />);
    wrapper.find('select').simulate('change', {
      target: { value },
    });
    expect(wrapper.state('day')).toBe(value);
  });

  it('should render error on blur of name input', () => {
    shouldRenderErrorOnBlur(<ActivityForm on onSubmit={() => {}} />, 0);
  });

  it('should render error on blur of teacher input', () => {
    shouldRenderErrorOnBlur(<ActivityForm on onSubmit={() => {}} />, 1);
  });

  it('should render error on blur of room input', () => {
    shouldRenderErrorOnBlur(<ActivityForm on onSubmit={() => {}} />, 2);
  });

  it('should render error on blur of classNo input', () => {
    shouldRenderErrorOnBlur(<ActivityForm on onSubmit={() => {}} />, 3);
  });

  it('should call onSubmit prop for valid form submition', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(
      <ActivityForm activity={testState.activities.items[1]} onSubmit={onSubmitSpy} />,
    );
    wrapper.find('form').simulate('submit', {
      preventDefault: () => {},
    });
    expect(wrapper.state('classNoError')).toBe('');
    expect(wrapper.state('nameError')).toBe('');
    expect(wrapper.state('roomError')).toBe('');
    expect(wrapper.state('teacherError')).toBe('');
    expect(onSubmitSpy).toHaveBeenCalledWith({
      classNo: testState.activities.items[1].classNo,
      day: testState.activities.items[1].day,
      name: testState.activities.items[1].name,
      room: testState.activities.items[1].room,
      teacher: testState.activities.items[1].teacher,
    });
  });
});
