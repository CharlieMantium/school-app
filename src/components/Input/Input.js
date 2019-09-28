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
      data-test="input"
    />
    {errorMsg && <p data-test="error-message">{errorMsg}</p>}
  </div>
);

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  errorMsg: PropTypes.string,
};

Input.defaultProps = {
  type: 'text',
  placeholder: '',
  value: '',
  onBlur: null,
  errorMsg: '',
};

export default Input;
