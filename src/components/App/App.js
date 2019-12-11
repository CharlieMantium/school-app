import React from 'react';
import { Provider } from 'react-redux';
import styled from 'styled-components';
import { IntlProvider } from 'react-intl';
import flatten from 'flat';

import Layout from 'styles/layout/Layout';
import { colors, spacing } from 'styles/base';
import configureStore from 'store/configureStore';
import AppRouter from 'router/AppRouter';
import messagesPL from 'translations/pl.json';
import messagesEN from 'translations/en.json';

const store = configureStore();

const messages = {
  pl: flatten(messagesPL),
  en: flatten(messagesEN),
};

const language = navigator.language.split(/[-_]/)[0];

const Footer = styled.footer`
  align-items: flex-end;
  display: flex;
  flex-direction: row-reverse;
  margin-top: auto;
  width: 100%;
`;

const BackgroundSrcLink = styled.a`
  color: ${colors.secondary};
  margin: ${spacing.xsSize};
  text-decoration: none;

  @media (min-width: ${spacing.desktopBreakpoint}) {
    margin: ${spacing.sSize};
  }
`;

const App = () => (
  <IntlProvider locale={language} messages={messages[language]}>
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
  </IntlProvider>
);

export default App;
