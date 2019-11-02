import React from 'react';
import { Provider } from 'react-redux';
import styled from 'styled-components';

import Layout from '../../styles/layout/Layout';
import configureStore from '../../store/configureStore';
import AppRouter from '../../router/AppRouter';
import { colors, spacing } from '../../styles/base/base';

const store = configureStore();

const Footer = styled.footer`
  align-items: flex-end;
  display: flex;
  flex-direction: row-reverse;
  width: 100%;

  @media (min-width: ${spacing.desktopBreakpoint}) {
    bottom: 0;
    position: absolute;
  }
`;

const BackgroundSrcLink = styled.a`
  color: ${colors.white};
  margin: ${spacing.xsSize};
  text-decoration: none;

  @media (min-width: ${spacing.desktopBreakpoint}) {
    margin: ${spacing.sSize};
  }
`;

const App = () => (
  <Layout>
    <Provider store={store}>
      <AppRouter />
    </Provider>
    <Footer>
      <BackgroundSrcLink href="http://www.freepik.com">
        Designed by rawpixel.com / Freepik
      </BackgroundSrcLink>
    </Footer>
  </Layout>
);

export default App;
