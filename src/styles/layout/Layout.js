import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import PropTypes from 'prop-types';
import { Normalize } from 'styled-normalize';
import Cabin from '../../../public/fonts/Cabin/Cabin-Regular.ttf';
import Satisfy from '../../../public/fonts/Satisfy/Satisfy-Regular.ttf';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
		@import url(${Cabin});
		@import url(${Satisfy});
		@font-face {
			font-family: Cabin;
			src: url(${Cabin});
		}
		@font-face {
			font-family: Satisfy;
			src: url(${Satisfy});
		}
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
	font-family: 'Cabin';
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
