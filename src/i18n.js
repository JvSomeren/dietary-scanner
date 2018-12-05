import RNLanguages from 'react-native-languages'
import i18n from 'i18n-js'

import en from './translations/en.json'
import nl from './translations/nl.json'
import pl from './translations/pl.json'

i18n.locale = RNLanguages.language.match(/[a-z]{2}/)[0];
i18n.fallbacks = true;
i18n.translations = { en, nl, pl };

export default i18n;
