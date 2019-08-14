import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ type, placeholder, value, onChange, onBlur }) => (
  <div>
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
    />
  </div>
);

Input.defaultProps = {
  type: 'text',
  placeholder: '',
  value: '',
};

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
};

export default Input;
