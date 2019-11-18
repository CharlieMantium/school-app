import { mountWithIntl } from 'tests/helper/intlEnzymeTestHelper';

export default (testedInput, inputIndex) => {
  const wrapper = mountWithIntl(testedInput);
  wrapper
    .find('input')
    .at(inputIndex)
    .simulate('click');
  expect(wrapper.find('[data-test="error-message"]').exists()).toBe(false);
  wrapper
    .find('input')
    .at(inputIndex)
    .simulate('blur');
  expect(wrapper.find('[data-test="error-message"]').exists()).toBe(true);
};
