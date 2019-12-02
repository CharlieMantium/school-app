import React, { useCallback, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { get } from 'lodash';
import Loader from 'react-loader';
import { FormattedMessage, useIntl } from 'react-intl';

import { startEditActivity, startRemoveActivity } from 'store/activities/actions';
import { getEditedActivity, getActivityItems } from 'store/activities/selectors';
import { ACTIVITY_PLAN_ROUTE } from 'constants/routes';
import activityPropTypeShape from 'prop-types/activity';
import historyPushPropTypeShape from 'prop-types/history';
import matchPropTypeShape from 'prop-types/matchShape';
import { generateActivitiesItemsPath } from 'helpers/paths';
import { ActivityFormWrapper } from 'styles/elements/ActivityFormWrapper';
import { Heading } from 'styles/elements/Heading';
import { Button } from 'styles/elements/Button';
import database from 'firebase/firebase';
import { errorNotification } from '../elements';

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
}) => {
  const [isIdLoaded, setIsIdLoaded] = useState(false);
  const [editedActivity, setEditedActivity] = useState({ ...activity, id });

  const activityId = get(editedActivity, 'id', id);

  const intl = useIntl();

  const editActivity = useCallback(
    async activitySubmited => {
      try {
        await onStartEditActivity(activityId, activitySubmited);
        history.push(ACTIVITY_PLAN_ROUTE);
      } catch (error) {
        errorNotification(
          intl.formatMessage(
            { id: 'notification.error.activityEdit', defaultMessage: error },
            { error },
          ),
        );
      }
    },
    [activityId],
  );

  const removeActivity = useCallback(async () => {
    try {
      await onStartRemoveActivity(activityId);
      history.push(ACTIVITY_PLAN_ROUTE);
    } catch (error) {
      errorNotification(
        intl.formatMessage(
          { id: 'notification.error.activityRemove', defaultMessage: error },
          { error },
        ),
      );
    }
  }, [activityId]);

  const setActivity = () => {
    (async () => {
      setIsIdLoaded(false);
      try {
        const snapshot = await database.ref(generateActivitiesItemsPath(id)).once('value');
        const fetchedActivity = snapshot.val();
        setEditedActivity({ ...fetchedActivity, id: snapshot.key });
      } catch (error) {
        errorNotification(
          intl.formatMessage(
            { id: 'notification.error.activityLoad', defaultMessage: error },
            { error },
          ),
        );
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
};

EditActivityPage.defaultProps = {
  activity: null,
  currentActivities: [],
};

const mapStateToProps = (state, props) => ({
  activity: getEditedActivity(state, props),
  currentActivities: getActivityItems(state),
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

// TODO: not for this pr, but can we change this function name to normal one ?
// why not removeActivity?
