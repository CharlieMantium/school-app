import { createIntl, createIntlCache } from 'react-intl';
import flatten from 'flat';

import messagesPL from 'translations/pl.json';
import messagesEN from 'translations/en.json';

const messages = {
  pl: flatten(messagesPL),
  en: flatten(messagesEN),
};

const language = navigator.language.split(/[-_]/)[0];

export const intl = createIntl(
  {
    locale: language,
    messages: messages[language],
  },
  createIntlCache,
);
