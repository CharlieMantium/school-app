import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import { startLogin } from 'store/auth/actions';
import { Button, Heading } from 'styles/elements';
import { colors, effects, fontSizes, spacing } from 'styles/base';

const LoginWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  &::before {
    content: '';
  }
  @media (min-width: ${spacing.desktopBreakpoint}) {
    justify-content: center;
  }
`;

const BigAppLogo = styled(Heading)`
  font-family: Satisfy;
  font-size: ${fontSizes.xxlFontSize};
  text-shadow: ${effects.outline(colors.secondary, spacing.xsSize)};
`;

const LoginButton = styled(Button)`
  opacity: 0.8;
  height: ${spacing.xxlSize};
  width: 90%;
  @media (min-width: ${spacing.desktopBreakpoint}) {
    margin-top: ${spacing.xlSize};
    width: 20%;
  }
`;

const LoginPage = () => {
  const dispatch = useDispatch();
  const onStartLogin = () => dispatch(startLogin());
  return (
    <LoginWrapper>
      <BigAppLogo as="h1">School App</BigAppLogo>
      <LoginButton onClick={onStartLogin} data-test="button-login">
        <FormattedMessage id="button.login" defaultMessage="Login" />
      </LoginButton>
    </LoginWrapper>
  );
};

export default LoginPage;
