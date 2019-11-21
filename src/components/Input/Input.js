import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { camelCase } from 'lodash';

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
        <FormattedMessage id={`activity.${camelCase(placeholder)}`} defaultMessage={placeholder} />
      </Description>
      {errorMsg && (
        <Description error>
          <FormattedMessage id="errorMessage" defaultMessage={errorMsg} data-test="error-message" />
        </Description>
      )}
    </DescriptionsWrapper>
    <FormattedMessage
      id={`activity.${camelCase(placeholder)}`}
      defaultMessage={placeholder}
      data-test="input"
    >
      {formattedValue => (
        <StyledInput
          type={type}
          placeholder={formattedValue}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
      )}
    </FormattedMessage>
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
