import styled from 'styled-components';

import { colors, effects, spacing } from '../base';

export const Heading = styled.h2`
  color: ${colors.primary};
  margin: ${spacing.mSize} auto;
  text-shadow: ${effects.outline(colors.secondary, spacing.xxsSize)};
  white-space: nowrap;
`;
