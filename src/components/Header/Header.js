import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { DiffAdded } from 'styled-icons/octicons/DiffAdded';

import { ACTIVITY_PLAN_ROUTE, CREATE_ACTIVITY_ROUTE } from 'constants/routes';
import { colors, effects, fontSizes, spacing } from 'styles/base';

import ActivitiesListFilter from '../ActivitiesListFilter';

const HeaderWrapper = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-around;

  @media (min-width: ${spacing.desktopBreakpoint}) {
    justify-content: space-between;
  }
`;

const AppName = styled(NavLink)`
  color: ${colors.black};
  font-family: Satisfy;
  font-size: ${fontSizes.xlFontSize};
  margin: ${spacing.xsSize} ${spacing.mSize};
  text-decoration: none;
  text-shadow: ${effects.outline(colors.white)};
  white-space: nowrap;

  &:hover {
    color: ${colors.white};
    text-shadow: ${effects.outline(colors.black)};
  }

  @media (min-width: ${spacing.desktopBreakpoint}) {
    margin: ${spacing.mSize};
  }
`;

const ToolsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const AddIcon = styled(DiffAdded)`
  color: ${colors.white};
  height: 28px;
  margin: ${spacing.xlSize};

  &:hover {
    color: ${colors.black};
  }
`;

const Header = () => (
  <HeaderWrapper>
    <AppName to={ACTIVITY_PLAN_ROUTE} data-test="app-name">
      School App
    </AppName>
    <ToolsWrapper>
      <ActivitiesListFilter data-test="filter-component" />
      <NavLink to={CREATE_ACTIVITY_ROUTE} data-test="react-navlink">
        <AddIcon title="Add New Activity" />
      </NavLink>
    </ToolsWrapper>
  </HeaderWrapper>
);

export default Header;

// TODO: why do you need to wrap it with styled with empty block?
// Karols comment: there was an imported component, wrapped in other 'styled' component,
// but without anything in ``. Karols comment ends.
// I think, that there is a lack of some rules in your eslint setup
// for styled-comopnents (handle it by separate PR)
