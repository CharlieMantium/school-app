import React from 'react';
import ActivitiesList from './ActivitiesList';
import ActivitiesListFilter from './ActivitiesListFilter';

const PlanPage = () => (
  <div>
    <ActivitiesListFilter />
    <ActivitiesList />
  </div>
);

export default PlanPage;
