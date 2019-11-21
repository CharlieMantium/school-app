import { IntlProvider } from 'react-intl';
import { mount, shallow } from 'enzyme';
import { flatten } from 'lodash';

import messagesEN from 'translations/en.json';

const messages = {
  en: flatten(messagesEN),
};

const defaultLocale = 'en';
const locale = defaultLocale;

export function mountWithIntl(node) {
  return mount(node, {
    wrappingComponent: IntlProvider,
    wrappingComponentProps: {
      locale,
      defaultLocale,
      messages,
    },
  });
}

export function shallowWithIntl(node) {
  return shallow(node, {
    wrappingComponent: IntlProvider,
    wrappingComponentProps: {
      locale,
      defaultLocale,
      messages,
    },
  });
}
