import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Loader from 'react-loader';

import { startSetActivities } from 'store/activities/actions';

import Week from '../Week';

const PlanPage = ({ onStartSetActivities }) => {
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  useEffect(() => {
    const afterComponentMountSetActivities = async () => {
      await onStartSetActivities();
      setIsDataLoaded(true);
    };
    afterComponentMountSetActivities();
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
export default connect(null, mapDispatchToProps)(PlanPage);
