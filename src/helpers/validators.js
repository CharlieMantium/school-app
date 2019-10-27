export const validateDot = input => {
	return !input.includes('.');
};

export const validatePositive = input => {
	return Number(input) > 0;
};
