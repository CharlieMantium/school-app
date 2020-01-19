import React, { useCallback, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { get } from 'lodash';
import Loader from 'react-loader';
import { FormattedMessage } from 'react-intl';

import { startEditActivity, startRemoveActivity } from 'store/activities/actions';
import { getEditedActivity, getActivityItems } from 'store/activities/selectors';
import { ACTIVITY_PLAN_ROUTE } from 'constants/routes';
import activityPropTypeShape from 'prop-types/activity';
import historyPushPropTypeShape from 'prop-types/history';
import matchPropTypeShape from 'prop-types/matchShape';
import { generateActivitiesItemsPath } from 'helpers/paths';
import { ActivityFormWrapper, Button, Heading } from 'styles/elements';
import database from 'firebase/firebase';
import { useToast } from 'hooks/useToast';

import ActivityForm from '../ActivityForm';

const EditActivityPage = ({
  activity,
  currentActivities,
  history,
  onStartEditActivity,
  onStartRemoveActivity,
  match: {
    params: { id },
  },
  uid,
}) => {
  const [isIdLoaded, setIsIdLoaded] = useState(false);
  const [editedActivity, setEditedActivity] = useState({ ...activity, id });

  const activityId = get(editedActivity, 'id', id);

  const { showErrorNotification } = useToast();

  const editActivity = useCallback(
    async activitySubmited => {
      try {
        await onStartEditActivity(activityId, activitySubmited);
        history.push(ACTIVITY_PLAN_ROUTE);
      } catch (error) {
        showErrorNotification('notification.error.activityEdit');
      }
    },
    [activityId],
  );

  const removeActivity = useCallback(async () => {
    try {
      await onStartRemoveActivity(activityId);
      history.push(ACTIVITY_PLAN_ROUTE);
    } catch (error) {
      showErrorNotification('notification.error.activityRemove');
    }
  }, [activityId]);

  const setActivity = () => {
    (async () => {
      setIsIdLoaded(false);
      try {
        const snapshot = await database.ref(generateActivitiesItemsPath(uid, id)).once('value');
        const fetchedActivity = snapshot.val();
        setEditedActivity({ ...fetchedActivity, id: snapshot.key });
      } catch (error) {
        showErrorNotification('notification.error.activityLoad');
      }
      setIsIdLoaded(true);
    })();
  };

  useEffect(setActivity, [id]);

  return (
    <ActivityFormWrapper>
      <Heading as="h1">
        <FormattedMessage id="form.heading.editActivityHeading" defaultMessage="Edit Activity" />
      </Heading>
      <Loader loaded={isIdLoaded} data-test="loader">
        <ActivityForm
          currentActivities={currentActivities}
          activity={editedActivity}
          onSubmit={activitySubmited => editActivity(activitySubmited)}
          data-test="form"
        />
        <Button
          onClick={() => removeActivity(activityId)}
          type="submit"
          remove
          toRight
          data-test="button-remove"
        >
          <FormattedMessage id="form.button.activityRemoveBtn" defaultMessage="Remove" />
        </Button>
      </Loader>
    </ActivityFormWrapper>
  );
};

EditActivityPage.propTypes = {
  activity: PropTypes.shape(activityPropTypeShape),
  currentActivities: PropTypes.arrayOf(PropTypes.shape(activityPropTypeShape)),
  history: PropTypes.shape(historyPushPropTypeShape).isRequired,
  match: PropTypes.shape(matchPropTypeShape).isRequired,
  onStartEditActivity: PropTypes.func.isRequired,
  onStartRemoveActivity: PropTypes.func.isRequired,
  uid: PropTypes.string.isRequired,
};

EditActivityPage.defaultProps = {
  activity: null,
  currentActivities: [],
};

const mapStateToProps = (state, props) => ({
  activity: getEditedActivity(state, props),
  currentActivities: getActivityItems(state),
  uid: state.auth.uid,
});

const mapDispatchToProps = {
  onStartEditActivity: startEditActivity,
  onStartRemoveActivity: startRemoveActivity,
};

export { EditActivityPage as EditActivityPageUnwrapped };
export default connect(mapStateToProps, mapDispatchToProps)(EditActivityPage);

// TODO: not for this pr, but can we change this function name to normal one ?
// why not removeActivity?
