import React from 'react';

import { shallowWithIntl, mountWithIntl } from 'tests/helper/intlEnzymeTestHelper';
import { daysOfTheWeek } from 'constants/dates';
import testRenderErrorOnBlur from 'helpers/tests';
import inputTypesArray from 'tests/fixtures/inputTypesArray';
import testState from 'tests/fixtures/state';

import ActivityForm from './ActivityForm';

describe('ActivityForm', () => {
  it('should render ActivityForm correctly', () => {
    const wrapper = mountWithIntl(<ActivityForm onSubmit={() => {}} />);
    const dataTestStrings = [
      '[data-test="select-day"]',
      '[data-test="select-option-default"]',
      '[data-test="button-submit"]',
      ...daysOfTheWeek.map(day => `[data-test="select-option-${day}"]`),
    ];
    inputTypesArray.forEach(inputType => {
      expect(wrapper.find(`[data-test="input-component-${inputType}"]`).exists()).toBe(true);
      expect(wrapper.find(`[data-test="input-component-${inputType}"]`).prop('value')).toBe('');
    });
    dataTestStrings.forEach(dataTestString => {
      expect(wrapper.find(dataTestString).exists()).toBe(true);
    });
  });

  it('should render ActivityForm with testState', () => {
    const wrapper = shallowWithIntl(
      <ActivityForm onSubmit={() => {}} activity={testState.activities.items[1]} />,
    );
    inputTypesArray.forEach(inputType => {
      expect(wrapper.find(`[data-test="input-component-${inputType}"]`).prop('value')).toBe(
        testState.activities.items[1][`${inputType}`],
      );
    });
    expect(wrapper.find('[data-test="select-day"]').prop('value')).toBe(
      testState.activities.items[1].day,
    );
  });

  it('should set errorMsg in inputs after invalid form submition', () => {
    const wrapper = shallowWithIntl(<ActivityForm onSubmit={() => {}} />);
    inputTypesArray.forEach(inputType => {
      expect(wrapper.find(`[data-test="input-component-${inputType}"]`).prop('errorMsg')).toBe('');
    });
    wrapper.find('[data-test="form"]').simulate('submit', {
      preventDefault: () => {},
    });
    inputTypesArray.forEach(inputType => {
      expect(wrapper.find(`[data-test="input-component-${inputType}"]`).prop('errorMsg')).toBe(
        'Required!',
      );
    });
  });

  it('should render error on blur of name input', () => {
    testRenderErrorOnBlur(<ActivityForm on onSubmit={() => {}} />, 0);
  });

  it('should render error on blur of teacher input', () => {
    testRenderErrorOnBlur(<ActivityForm on onSubmit={() => {}} />, 1);
  });

  it('should render error on blur of room input', () => {
    testRenderErrorOnBlur(<ActivityForm on onSubmit={() => {}} />, 2);
  });

  it('should render error on blur of activityOrdinal input', () => {
    testRenderErrorOnBlur(<ActivityForm on onSubmit={() => {}} />, 3);
  });

  it('should call onSubmit prop for valid form submition', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallowWithIntl(
      <ActivityForm activity={testState.activities.items[1]} onSubmit={onSubmitSpy} />,
    );
    wrapper.find('form').simulate('submit', {
      preventDefault: () => {},
    });
    expect(wrapper.state('activityOrdinalError')).toBe('');
    expect(wrapper.state('nameError')).toBe('');
    expect(wrapper.state('roomError')).toBe('');
    expect(wrapper.state('teacherError')).toBe('');
    expect(onSubmitSpy).toHaveBeenCalledWith({
      activityOrdinal: testState.activities.items[1].activityOrdinal,
      day: testState.activities.items[1].day,
      name: testState.activities.items[1].name,
      room: testState.activities.items[1].room,
      teacher: testState.activities.items[1].teacher,
    });
  });
});
