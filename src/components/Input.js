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
