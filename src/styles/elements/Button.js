import styled from 'styled-components';

import { colors, spacing } from '../base';

export const Button = styled.button`
  background: ${colors.secondary};
  border: ${spacing.xsSize} solid ${colors.borderUnactive};
  border-radius: ${spacing.sSize};
  display: block;
  margin: ${props => props.toRight && '0 0 0 auto'};

  &:hover {
    color: ${props => props.remove && colors.secondary};
    background: ${props => (props.remove ? colors.error : colors.activityName)};
    border-color: ${colors.secondary};
  }
`;
