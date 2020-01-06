import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import { startLogin } from 'store/auth/actions';
import { Button } from 'styles/elements/Button';

const LoginWrapper = styled.div``;

const LoginPage = () => {
  const dispatch = useDispatch();
  const onStartLogin = () => dispatch(startLogin());
  return (
    <LoginWrapper>
      <Button onClick={onStartLogin} data-test="button-login">
        <FormattedMessage id="button.login" defaultMessage="Login" />
      </Button>
    </LoginWrapper>
  );
};

export default LoginPage;
