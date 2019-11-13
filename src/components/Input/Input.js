import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import { colors, effects, spacing } from 'styles/base';

const DescriptionsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Description = styled.p`
  color: ${props => (props.error ? colors.red : colors.white)};
  text-shadow: ${props => (props.error ? effects.outline(colors.black) : 'none')};
  margin: ${spacing.mSize} ${spacing.sSize} 0 ${spacing.sSize};
`;

const StyledInput = styled.input`
  border: ${spacing.xsSize} solid ${colors.darkGrey};
  border-radius: ${spacing.sSize};
  margin: auto;
  padding: ${spacing.xxsSize} ${spacing.sSize};
  width: 100%;

  &:focus {
    border-color: ${colors.black};
  }

  &:hover {
    border-color: ${colors.green};
  }
`;

const Input = ({ type, placeholder, value, onChange, onBlur, errorMsg }) => (
  <>
    <DescriptionsWrapper>
      <Description>
        <FormattedMessage id={`inputDesc-${placeholder}`} defaultMessage={placeholder} />
      </Description>
      {errorMsg && (
        <Description error data-test="error-message">
          {errorMsg}
        </Description>
      )}
    </DescriptionsWrapper>
    <StyledInput
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      data-test="input"
    />
  </>
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
