import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { startLogin } from 'store/auth';
import { Button } from 'styles/elements/Button';

const LoginWrapper = styled.div``;

const LoginPage = ({ onStartLogin }) => (
  <LoginWrapper>
    <Button onClick={onStartLogin}>Login</Button>
  </LoginWrapper>
);

LoginPage.propTypes = {
  onStartLogin: PropTypes.func.isRequired,
};

const mapDispatchtoProps = dispatch => ({
  onStartLogin: () => dispatch(startLogin()),
});

export { LoginPage as LoginPageUnwrapped };
export default connect(
  null,
  mapDispatchtoProps,
)(LoginPage);
