import _ from 'lodash';

export const validateNumber = input => {
  return _.isNumber(input / 1);
};

export const validatePositive = input => {
  return input / 1 > 0;
};

export const validateInteger = input => {
  return _.isInteger(input / 1);
};
