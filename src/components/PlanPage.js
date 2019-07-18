import React from 'react';
import ActivitiesList from './ActivitiesList';
import ActivitiesListFilters from './ActivitiesListFilters';

const PlanPage = () => (
  <div>
    <ActivitiesListFilters />
    <ActivitiesList />
  </div>
);

export default PlanPage;