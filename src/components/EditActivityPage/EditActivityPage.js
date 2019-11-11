import React, { useCallback, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { get } from 'lodash';
import Loader from 'react-loader';

import { startEditActivity, startRemoveActivity } from 'store/activities/actions';
import { getEditedActivity } from 'store/activities/selectors';
import { ACTIVITY_PLAN_ROUTE } from 'constants/routes';
import activityPropTypeShape from 'prop-types/activity';
import historyPushPropTypeShape from 'prop-types/history';
import matchPropTypeShape from 'prop-types/matchShape';
import { generateActivitiesItemsPath } from 'helpers/paths';
import { ActivityFormWrapper } from 'styles/elements/ActivityFormWrapper';
import { Heading } from 'styles/elements/Heading';
import { Button } from 'styles/elements/Button';
import database from 'firebase/firebase';

import ActivityForm from '../ActivityForm';

const EditActivityPage = ({
  activity,
  history,
  onStartEditActivity,
  onStartRemoveActivity,
  match: {
    params: { id },
  },
}) => {
  const [isIdLoaded, setIsIdLoaded] = useState(false);
  const [editedActivity, setEditedActivity] = useState({ ...activity, id });

  const activityId = get(editedActivity, 'id', id);

  const asyncEditActivity = useCallback(
    async activitySubmited => {
      try {
        await onStartEditActivity(activityId, activitySubmited);
        history.push(ACTIVITY_PLAN_ROUTE);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(`Something went wrong durring activity editing: ${error}`);
      }
    },
    [activityId],
  );

  const asyncRemoveActivity = useCallback(async () => {
    try {
      await onStartRemoveActivity(activityId);
      history.push(ACTIVITY_PLAN_ROUTE);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(`Something went wrong durring activity removal: ${error}`);
    }
  }, [activityId]);

  const asyncSetActivity = () => {
    (async () => {
      setIsIdLoaded(false);
      try {
        const snapshot = await database.ref(generateActivitiesItemsPath(id)).once('value');
        const fetchedActivity = snapshot.val();
        setEditedActivity({ ...fetchedActivity, id: snapshot.key });
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(`Something went wrong durring activity load: ${error}`);
      }
      setIsIdLoaded(true);
    })();
  };

  useEffect(asyncSetActivity, [id]);

  return (
    <ActivityFormWrapper>
      <Heading as="h1">Edit Activity</Heading>
      <Loader loaded={isIdLoaded} data-test="loader">
        <ActivityForm
          activity={editedActivity}
          onSubmit={activitySubmited => asyncEditActivity(activitySubmited)}
          data-test="form"
        />
        <Button
          onClick={() => asyncRemoveActivity(activityId)}
          type="submit"
          data-test="button-remove"
          remove
          toRight
        >
          Remove Activity
        </Button>
      </Loader>
    </ActivityFormWrapper>
  );
};

EditActivityPage.propTypes = {
  activity: PropTypes.shape(activityPropTypeShape),
  history: PropTypes.shape(historyPushPropTypeShape).isRequired,
  match: PropTypes.shape(matchPropTypeShape).isRequired,
  onStartEditActivity: PropTypes.func.isRequired,
  onStartRemoveActivity: PropTypes.func.isRequired,
};

EditActivityPage.defaultProps = {
  activity: null,
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
