import { intl } from 'store/configureIntl';
import { errorNotification, successNotification, warningNotification } from 'components/elements';

export const generateSuccessNotification = notificationMsg => {
  successNotification(
    intl.formatMessage({
      id: notificationMsg,
      defaultMessage: 'Success!',
    }),
  );
};

export const generateWarningNotification = notificationMsg => {
  warningNotification(
    intl.formatMessage({
      id: notificationMsg,
      defaultMessage: 'Warning!',
    }),
  );
};

export const generateErrorNotification = notificationMsg => {
  errorNotification(
    intl.formatMessage({
      id: notificationMsg,
      defaultMessage: 'Error!',
    }),
  );
};
