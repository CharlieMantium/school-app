import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ActivityForm from '../ActivityForm/ActivityForm';
import { startEditActivity, startRemoveActivity } from '../../store/activities/actions';
import { getEditedActivity } from '../../store/activities/selectors';
import { ACTIVITY_PLAN_ROUTE } from '../../constants/routes';
import activityPropTypeShape from '../../prop-types/activity';
import historyPushPropTypeShape from '../../prop-types/history';

const EditActivityPage = ({ activity, history, onStartEditActivity, onStartRemoveActivity }) => {
  const asyncEditActivity = useCallback(
    async activitySubmited => {
      try {
        await onStartEditActivity(activity.id, activitySubmited);
        history.push(ACTIVITY_PLAN_ROUTE);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(`Something went wrong durring activity editing: ${error}`);
      }
    },
    [activity.id],
  );

  const asyncRemoveActivity = useCallback(async () => {
    try {
      await onStartRemoveActivity(activity.id);
      history.push(ACTIVITY_PLAN_ROUTE);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(`Something went wrong durring activity removal: ${error}`);
    }
  }, []);

  return (
    <div>
      <ActivityForm
        activity={activity}
        onSubmit={activitySubmited => asyncEditActivity(activitySubmited)}
        data-test="form"
      />

      <button
        onClick={() => asyncRemoveActivity(activity.id)}
        type="submit"
        data-test="button-remove"
      >
        Remove
      </button>
    </div>
  );
};

EditActivityPage.propTypes = {
  activity: PropTypes.shape(activityPropTypeShape),
  history: PropTypes.shape(historyPushPropTypeShape).isRequired,
  onStartEditActivity: PropTypes.func.isRequired,
  onStartRemoveActivity: PropTypes.func.isRequired,
};

EditActivityPage.defaultProps = {
  activity: {
    classNo: '',
    day: '',
    name: '',
    room: '',
    teacher: '',
  },
};

const mapStateToProps = (state, props) => ({
  activity: getEditedActivity(state, props),
});

const mapDispatchToProps = {
  onStartEditActivity: startEditActivity,
  onStartRemoveActivity: startRemoveActivity,
};

export { EditActivityPage as EditActivityPageUnwrapped };
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditActivityPage);

// TODO: I recommend you to think about react-intl package.
// This is not a priority, but it would be great knowledge for future ;)
// spend some time for internatiolization in short future.
