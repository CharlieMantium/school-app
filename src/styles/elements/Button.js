import styled from 'styled-components';

import { colors, spacing } from '../base/base';

export const Button = styled.button`
  background: ${colors.white};
  border: ${spacing.xsSize} solid ${colors.darkGrey};
  border-radius: ${spacing.sSize};

  &:hover {
    background: ${colors.green};
    border-color: ${colors.white};
  }
`;
