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
        console.log(`Something went wrong durring activity editing: ${error}`); // eslint-disable-line no-console
      }
    },
    [activity.id],
  );

  const asyncRemoveActivity = useCallback(async () => {
    try {
      await onStartRemoveActivity(activity.id);
      history.push(ACTIVITY_PLAN_ROUTE);
    } catch (error) {
      console.log(`Something went wrong durring activity removal: ${error}`); // eslint-disable-line no-console
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
  activity: PropTypes.shape(activityPropTypeShape).isRequired,
  history: PropTypes.shape(historyPushPropTypeShape).isRequired,
  onStartEditActivity: PropTypes.func.isRequired,
  onStartRemoveActivity: PropTypes.func.isRequired,
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

// TODO: in general, I don't like this onStartEditActivity.
// You could try to handle it in prettier way.
// There is a nice package to handle requests redux-axios-middleware.
// It will be a good job if you will handle it using only documentation. Do it in separate PR.

// TODO: I recommend you to think about react-intl package.
// This is not a priority, but it would be great knowledge for future ;)
// spend some time for internatiolization in short future.
