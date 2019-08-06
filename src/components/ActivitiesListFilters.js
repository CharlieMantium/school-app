import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setTextFilter } from '../actions/filters';

const ActivitiesListFilters = ({ filters: { text }, onSetTextFilter }) => (
  <div>
    <input
      type="text"
      value={text}
      onChange={e => {
        onSetTextFilter(e.target.value);
      }}
    />
  </div>
);

ActivitiesListFilters.defaultProps = {
  filters: {},
  text: ''
};

ActivitiesListFilters.propTypes = {
  filters: PropTypes.shape({
    text: PropTypes.string
  }),
  onSetTextFilter: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  filters: state.filters
});

const mapDispatchToProps = {
  onSetTextFilter: setTextFilter
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActivitiesListFilters);
