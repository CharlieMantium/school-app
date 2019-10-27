import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
	<div>
		<p data-test="not-found-message">404 - </p>
		<Link to="/" data-test="react-link">
			Go home
		</Link>
	</div>
);

export default NotFoundPage;
