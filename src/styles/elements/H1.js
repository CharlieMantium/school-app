import styled from 'styled-components';

import { colors, effects, spacing } from '../base/base';

export const H1 = styled.h1`
  color: ${colors.black};
  margin: ${spacing.mSize} auto;
  text-shadow: ${effects.outline(colors.white)};
  white-space: nowrap;
`;
