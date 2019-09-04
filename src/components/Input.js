import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ type, placeholder, value, onChange, onBlur, errorMsg }) => (
  <div>
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
    />
    {errorMsg && <p>{errorMsg}</p>}
  </div>
);

Input.defaultProps = {
  type: 'text',
  placeholder: '',
  value: '',
  onChange: () => {},
  onBlur: () => {},
  errorMsg: '',
};

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  errorMsg: PropTypes.string,
};

export default Input;

// TODO: assumption was a little different.
// This input should trigger onChange event passed here as a prop.
// Error message also should be here and should be rendered when Input will get error from his parent,
// or/and on his own blur. So -> onBlur event should be handle here.
