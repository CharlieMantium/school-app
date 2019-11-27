import React from 'react';
import Dropdown from 'react-dropdown';
import { useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import 'react-dropdown/style.css';

import { daysOfTheWeek } from 'constants/dates';
import { colors, spacing } from 'styles/base';

const StyledDropdown = styled(Dropdown)`
  border: ${spacing.xsSize} solid ${colors.darkGrey};
  border-radius: ${spacing.sSize};

  &:focus {
    border-color: ${colors.black};
  }

  &:hover {
    border-color: ${colors.green};
  }
`;

const DropdownList = ({ value, onChange }) => {
  const intl = useIntl();
  const options = daysOfTheWeek.map(day => ({
    value: day,
    label: intl.formatMessage({ id: `weekDays.${day}`, defaultMessage: day }),
  }));
  return (
    <StyledDropdown
      options={options}
      onChange={onChange}
      value={value}
      placeholder={intl.formatMessage({
        id: 'form.activityFormSelectDefault',
        defaultMessage: 'Pick a Day',
      })}
    />
  );
};

DropdownList.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default DropdownList;
