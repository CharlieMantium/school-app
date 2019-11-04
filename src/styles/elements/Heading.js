import styled from 'styled-components';

import { colors, effects, spacing } from '../base/base';

export const Heading = styled.p`
  color: ${colors.black};
  margin: ${spacing.mSize} auto;
  text-shadow: ${effects.outline(colors.white)};
  white-space: nowrap;
`;
