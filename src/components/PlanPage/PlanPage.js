import React from 'react';

import ActivitiesListFilter from '../ActivitiesListFilter';
import Week from '../Week/Week';

const PlanPage = () => (
  <div>
    <ActivitiesListFilter data-test="filter-component" />
    <Week data-test="week-component" />
  </div>
);

export default PlanPage;
