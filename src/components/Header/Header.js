import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { DiffAdded } from 'styled-icons/octicons/DiffAdded';

import { ACTIVITY_PLAN_ROUTE, CREATE_ACTIVITY_ROUTE } from 'constants/routes';
import { colors, effects, fontSizes, spacing } from 'styles/base';
import { setFilter } from 'store/activities/actions';

import { Input } from 'components/elements';

const HeaderWrapper = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-around;

  @media (min-width: ${spacing.desktopBreakpoint}) {
    justify-content: space-between;
  }
`;

const AppName = styled(NavLink)`
  color: ${colors.primary};
  font-family: Satisfy;
  font-size: ${fontSizes.xlFontSize};
  margin: ${spacing.xsSize} ${spacing.mSize};
  text-decoration: none;
  text-shadow: ${effects.outline(colors.secondary)};
  white-space: nowrap;

  &:hover {
    color: ${colors.secondary};
    text-shadow: ${effects.outline(colors.primary)};
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
  color: ${colors.secondary};
  height: 28px;
  margin: ${spacing.xlSize};

  &:hover {
    color: ${colors.primary};
  }
`;

const Header = ({ onSetFilter }) => {
  const [searchText, changeSearchText] = useState('');
  const onInputValueChange = e => {
    const inputValue = e.target.value;
    changeSearchText(inputValue);
    onSetFilter(inputValue);
  };

  return (
    <HeaderWrapper>
      <AppName to={ACTIVITY_PLAN_ROUTE} data-test="app-name">
        School App
      </AppName>
      <ToolsWrapper>
        <Input
          type="text"
          value={searchText}
          onChange={onInputValueChange}
          data-test="filter-component"
        />
        <NavLink to={CREATE_ACTIVITY_ROUTE} data-test="react-navlink">
          <AddIcon title="Add New Activity" />
        </NavLink>
      </ToolsWrapper>
    </HeaderWrapper>
  );
};

Header.propTypes = {
  onSetFilter: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  onSetFilter: setFilter,
};

export { Header as HeaderUnwrapped };
export default connect(
  null,
  mapDispatchToProps,
)(Header);
