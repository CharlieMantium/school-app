import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { NavLink, useLocation } from 'react-router-dom';
import { AddCircleOutline } from 'styled-icons/material/AddCircleOutline';
import { LogOutCircle } from 'styled-icons/boxicons-regular/LogOutCircle';
import { CancelCircle } from 'styled-icons/icomoon/CancelCircle';

import { ACTIVITY_PLAN_ROUTE, CREATE_ACTIVITY_ROUTE } from 'constants/routes';
import { colors, effects, fontSizes, spacing } from 'styles/base';
import { setFilter } from 'store/activities/actions';
import { startLogout } from 'store/auth/actions';

import { Input } from 'components/elements';

const HeaderWrapper = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

const AppName = styled(NavLink)`
  color: ${colors.primary};
  font-family: Satisfy;
  font-size: ${fontSizes.xlFontSize};
  margin: ${spacing.xsSize} ${spacing.mSize};
  text-decoration: none;
  text-shadow: ${effects.outline(colors.secondary, spacing.xxsSize)};
  white-space: nowrap;

  &:hover {
    color: ${colors.secondary};
    text-shadow: ${effects.outline(colors.primary, spacing.xxsSize)};
  }

  @media (min-width: ${spacing.desktopBreakpoint}) {
    margin: ${spacing.mSize};
  }
`;

const ToolsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${spacing.sSize};
`;

const AddIcon = styled(AddCircleOutline)`
  color: ${colors.secondary};
  height: 26px;

  &:hover {
    color: ${colors.activityName};
  }

  @media (min-width: ${spacing.desktopBreakpoint}) {
    margin: 0 ${spacing.sSize} 0 ${spacing.lSize};
    height: 32px;
  }
`;

const LogoutIcon = styled(LogOutCircle)`
  color: ${colors.secondary};
  height: 50px;

  &:hover {
    color: ${colors.activityName};
  }

  @media (min-width: ${spacing.desktopBreakpoint}) {
    margin: 0 ${spacing.sSize};
  }
`;

const BackIcon = styled(CancelCircle)`
  color: ${colors.secondary};
  height: 21px;
  margin-right: ${spacing.lSize};

  &:hover {
    color: ${colors.activityName};
  }

  @media (min-width: ${spacing.desktopBreakpoint}) {
    height: 27px;
  }
`;

const Header = () => {
  const dispatch = useDispatch();
  const onSetFilter = textValue => dispatch(setFilter(textValue));
  const onStartLogout = () => dispatch(startLogout());

  const [searchText, changeSearchText] = useState('');
  const onInputValueChange = e => {
    const inputValue = e.target.value;
    changeSearchText(inputValue);
    onSetFilter(inputValue);
  };

  const { pathname: location } = useLocation();

  return (
    <HeaderWrapper>
      <AppName to={ACTIVITY_PLAN_ROUTE} data-test="app-name">
        School App
      </AppName>
      <ToolsWrapper>
        {location === ACTIVITY_PLAN_ROUTE ? (
          <>
            <Input
              type="text"
              value={searchText}
              onChange={onInputValueChange}
              data-test="filter-component"
            />
            <NavLink to={CREATE_ACTIVITY_ROUTE} data-test="react-navlink">
              <FormattedMessage id="button.add" defaultMessage="Add New Activity">
                {formattedValue => <AddIcon title={formattedValue} />}
              </FormattedMessage>
            </NavLink>
            <FormattedMessage id="button.logout" defaultMessage="Logout">
              {formattedValue => (
                <LogoutIcon
                  onClick={onStartLogout}
                  title={formattedValue}
                  data-test="button-logout"
                />
              )}
            </FormattedMessage>
          </>
        ) : (
          <NavLink to={ACTIVITY_PLAN_ROUTE} data-test="react-navlink">
            <FormattedMessage id="button.back" defaultMessage="Cancel">
              {formattedValue => <BackIcon title={formattedValue} />}
            </FormattedMessage>
          </NavLink>
        )}
      </ToolsWrapper>
    </HeaderWrapper>
  );
};

export default Header;
