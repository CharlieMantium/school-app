import { mount } from 'enzyme';

export default (testedInput, inputIndex) => {
  const wrapper = mount(testedInput);
  wrapper
    .find('input')
    .at(inputIndex)
    .simulate('click');
  expect(wrapper).toMatchSnapshot();
  wrapper
    .find('input')
    .at(inputIndex)
    .simulate('blur');
  expect(wrapper).toMatchSnapshot();
};
