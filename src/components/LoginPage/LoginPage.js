import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { startLogin } from 'store/auth/actions';
import { Button } from 'styles/elements/Button';

const LoginWrapper = styled.div``;

const LoginPage = () => {
  const onStartLogin = useDispatch()(startLogin);
  return (
    <LoginWrapper>
      <Button onClick={onStartLogin}>Login</Button>
    </LoginWrapper>
  );
};

export default LoginPage;
