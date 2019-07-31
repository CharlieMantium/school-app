import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {setTextFilter} from '../actions/filters';

const ActivitiesListFilters = ({ filters: {text}, dispatch }) => (
  <div>
    <input type="text" value={text} onChange={(e) => {
      dispatch(setTextFilter(e.target.value));
    }}/>
  </div>
);

ActivitiesListFilters.propTypes = {
  filters: PropTypes.object,
  text: PropTypes.string,
  dispatch: PropTypes.func
};

const mapStateToProps = (state) => ({
  filters: state.filters
});

export default connect(mapStateToProps)(ActivitiesListFilters);
