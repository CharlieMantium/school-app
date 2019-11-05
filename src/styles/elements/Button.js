import styled from 'styled-components';

import { colors, spacing } from '../base/base';

export const Button = styled.button`
  background: ${colors.white};
  border: ${spacing.xsSize} solid ${colors.darkGrey};
  border-radius: ${spacing.sSize};
  display: block;
  margin: ${props => props.toRight && '0 0 0 auto'};

  &:hover {
    color: ${props => props.remove && colors.white};
    background: ${props => (props.remove ? colors.red : colors.green)};
    border-color: ${colors.white};
  }
`;
