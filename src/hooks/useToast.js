import { useIntl } from 'react-intl';

import { errorNotification } from 'components/elements';

export const useToast = () => {
  const intl = useIntl();
  const showErrorNotification = errorMsg => {
    errorNotification(intl.formatMessage({ id: errorMsg, defaultMessage: 'Error!' }));
  };
  return { showErrorNotification };
};
