import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import PropTypes from 'prop-types';
import { Normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  };
  body {
    background-image: url('/images/background/background.jpg');
    background-size: cover;
    height: 100vh;
  };

  *, *::before, *::after {
    box-sizing: inherit;
  };
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Cabin';
  height: 100vh;
`;

const Layout = ({ children }) => (
  <>
    <Normalize />
    <GlobalStyle />
    <StyledWrapper>{children}</StyledWrapper>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
