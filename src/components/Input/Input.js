import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledInput = styled.input`
	width: 100%;
	margin: auto;
`;

const ErrorMsgParagraph = styled.p``;

const Input = ({ type, placeholder, value, onChange, onBlur, errorMsg }) => (
	<>
		<StyledInput
			type={type}
			placeholder={placeholder}
			value={value}
			onChange={onChange}
			onBlur={onBlur}
			data-test="input"
		/>
		{errorMsg && (
			<ErrorMsgParagraph data-test="error-message">
				{errorMsg}
			</ErrorMsgParagraph>
		)}
	</>
);

Input.propTypes = {
	type: PropTypes.string,
	placeholder: PropTypes.string,
	value: PropTypes.string,
	onChange: PropTypes.func.isRequired,
	onBlur: PropTypes.func,
	errorMsg: PropTypes.string,
};

Input.defaultProps = {
	type: 'text',
	placeholder: '',
	value: '',
	onBlur: null,
	errorMsg: '',
};

export default Input;
