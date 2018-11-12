import { createStackNavigator } from "react-navigation";

import SettingsList from './List'
import LanguageList from '../../components/LanguageList'
import i18n from "../../i18n";

const SettingsNavigator = createStackNavigator(
  {
    SettingsList: {
      screen: SettingsList,
      navigationOptions: ( { navigation } ) => ({
        title: i18n.t( 'Settings.settings' ).capitalize()
      })
    },
    SettingsLanguage: {
      screen: LanguageList,
      navigationOptions: ( { navigation } ) => ({
        title: i18n.t( 'Settings.language' ).capitalize()
      })
    }
  },
  {
    initialRouteName: 'SettingsList',
    backBehavior: 'initialRoute'
  }
);

export default SettingsNavigator;
