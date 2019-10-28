import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { DiffAdded } from 'styled-icons/octicons/DiffAdded';

import { ACTIVITY_PLAN_ROUTE, CREATE_ACTIVITY_ROUTE } from '../../constants/routes';
import ActivitiesListFilter from '../ActivitiesListFilter';
import { spacing, colors } from '../../styles/base/base';

const HeaderWrapper = styled.header`
  align-items: center;
  display: flex;
  height: 10vh;
  justify-content: space-around;

  @media (min-width: ${spacing.desktopBreakpoint}) {
    justify-content: space-between;
  }
`;

const AppName = styled(NavLink)`
  color: ${colors.black};
  font-family: Satisfy;
  font-size: 8vw;
  text-decoration: none;
  text-shadow: -1px 0 ${colors.white}, 0 1px ${colors.white}, 1px 0 ${colors.white},
    0 -1px ${colors.white};
  white-space: nowrap;

  @media (min-width: ${spacing.desktopBreakpoint}) {
    font-size: 3em;
    margin: ${spacing.mSize};
  }
`;

const ToolsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Filter = styled(ActivitiesListFilter)``;

const AddActivityLink = styled(NavLink)``;

const AddIcon = styled(DiffAdded)`
  color: ${colors.white};
  height: 28px;
  margin: 20px;
`;

const Header = () => (
  <HeaderWrapper>
    <AppName to={ACTIVITY_PLAN_ROUTE} data-test="app-name">
      School App
    </AppName>
    <ToolsWrapper>
      <Filter data-test="filter-component" />
      <AddActivityLink to={CREATE_ACTIVITY_ROUTE} data-test="react-navlink">
        <AddIcon title="Add New Activity" />
      </AddActivityLink>
    </ToolsWrapper>
  </HeaderWrapper>
);

export default Header;
