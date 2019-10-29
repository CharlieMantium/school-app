import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Loader from 'react-loader';

import Week from '../Week';
import { startSetActivities } from '../../store/activities/actions';

const PlanPage = ({ onStartSetActivities }) => {
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  useEffect(async () => {
    await onStartSetActivities();
    setIsDataLoaded(true);
  }, []);

  return (
    <>
      <Loader loaded={isDataLoaded}>
        <Week data-test="week-component" />
      </Loader>
    </>
  );
};

PlanPage.propTypes = {
  onStartSetActivities: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  onStartSetActivities: startSetActivities,
};

export { PlanPage as PlanPageUnwrapped };
export default connect(
  null,
  mapDispatchToProps,
)(PlanPage);
