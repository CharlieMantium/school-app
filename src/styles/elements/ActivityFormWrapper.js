import styled from 'styled-components';

import { spacing } from '../base/base';

export const ActivityFormWrapper = styled.div`
  padding: ${spacing.sSize};

  @media (min-width: ${spacing.desktopBreakpoint}) {
    margin: 0 auto;
    width: 80%;
  }

  @media (min-width: ${spacing.largeDesktopBreakpoint}) {
    margin: 0 auto;
    width: 40%;
  }
`;
