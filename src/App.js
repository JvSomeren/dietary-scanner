import React, { Component } from 'react'
import { createBottomTabNavigator, createSwitchNavigator } from 'react-navigation'
import { Provider } from 'react-redux'
import { initStore, store } from './store'
import { updateLanguage } from "./services/settings/service";
import './services/helpers'
import RNLanguages from 'react-native-languages'
import i18n from './i18n'

import Splash from './scenes/Splash'
import Welcome from './scenes/Welcome'
import PreferencesNavigator from './scenes/Preferences'
import ScanNavigator from "./scenes/Scan"
import SettingsNavigator from './scenes/Settings'
import { Icon } from "react-native-elements";

const WelcomeNavigator = createSwitchNavigator(
  {
    Welcome: {
      screen: Welcome,
      navigationOptions: () => ({
        header: null,
      }),
    },
    Preferences: {
      screen: PreferencesNavigator,
      navigationOptions: () => ({
        header: null,
      }),
    }
  },
  {
    initialRouteName: 'Welcome'
  }
);

const MainNavigator = createBottomTabNavigator(
  {
    Preferences: {
      screen: PreferencesNavigator,
      navigationOptions: () => ({
        header: null,
        tabBarLabel: i18n.t( 'Preferences.tab' ),
        tabBarIcon: ( { focused, horizontal, tintColor } ) => <Icon name={"food-fork-drink"} color={tintColor} type={'material-community'} />,
        tabBarOnPress: ( { navigation } ) => navigation.navigate( 'List' )
      }),
    },
    Scan: {
      screen: ScanNavigator,
      navigationOptions: () => ({
        header: null,
        tabBarLabel: i18n.t( 'Scan.tab' ),
        tabBarIcon: ( { focused, horizontal, tintColor } ) => <Icon name={"barcode-scan"} color={tintColor} type={'material-community'} />,
        tabBarOnPress: ( { navigation } ) => navigation.navigate( 'Scanning' )
      }),
    },
    Settings: {
      screen: SettingsNavigator,
      navigationOptions: () => ({
        header: null,
        tabBarLabel: i18n.t( 'Settings.tab' ),
        tabBarIcon: ( { focused, horizontal, tintColor } ) => <Icon name={"settings"} color={tintColor} type={'material-community'} />,
        tabBarOnPress: ( { navigation } ) => navigation.navigate( 'SettingsList' )
      }),
    }
  },
  {
    initialRouteName: 'Scan',
  }
);

const RootStack = createSwitchNavigator(
  {
    SplashScreen: {
      screen: Splash,
      navigationOptions: () => ({
        header: null,
      }),
    },
    WelcomeStack: {
      screen: WelcomeNavigator,
      navigationOptions: () => ({
        header: null,
      }),
    },
    MainStack: {
      screen: MainNavigator,
      navigationOptions: () => ({
        header: null,
      }),
    }
  },
  {
    initialRouteName: 'SplashScreen',
  }
);

type Props = {};
export default class App extends Component<Props> {
  componentWillMount() {
    RNLanguages.addEventListener( 'change', this._onLanguagesChange );

    store.dispatch( initStore() );
  }

  componentWillUnmount() {
    RNLanguages.removeEventListener( 'change', this._onLanguagesChange );
  }

  _onLanguagesChange = ( { language } ) => {
    store.dispatch( updateLanguage( language ) );
  };

  render() {
    return (
      <Provider store={store}>
        <RootStack />
      </Provider>
    )
  }
}
