import { createStackNavigator } from "react-navigation";

import SettingsList from './List'
import LanguageList from '../../components/LanguageList'
import ResetAll from './ResetAll'
import i18n from "../../i18n";
import React from "react";

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
    },
    SettingsResetAll: {
      screen: ResetAll,
      navigationOptions: ( { navigation } ) => ({
        title: i18n.t( 'Settings.reset all' ).capitalize()
      })
    }
  },
  {
    initialRouteName: 'SettingsList',
    backBehavior: 'initialRoute'
  }
);

export default SettingsNavigator;
