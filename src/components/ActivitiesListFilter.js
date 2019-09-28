import React from 'react';

import Input from './Input';

const ActivitiesListFilter = () => (
  <div>
    <Input data-test="input-component" type="text" onChange={() => {}} />
  </div>
);

export default ActivitiesListFilter;

// TODO: next PR - separate folder for each component. Like:
// components/ActivitiesListFilter/ActivitiesListFilter.js
// components/ActivitiesListFilter/ActivitiesListFilter.test.js
// the you will be importing from ...ActivitiesListFilter/ActivitiesListFilter.
// If you wish, you can also add index.js file to this folder with line:
// export { default as ActivitiesListFilter } to import like `import ActivitiesList from "...ActivitiesListFilter".
