import React, { Component } from 'react'
import { createBottomTabNavigator, createSwitchNavigator } from 'react-navigation'
import { Provider } from 'react-redux'
import { store } from './store'
import { updateLanguage, init as settingsInit } from "./services/settings/service";
import { init as preferencesInit } from "./services/preferences/service";
import RNLanguages from 'react-native-languages'
import i18n from './i18n'

import Splash from './scenes/Splash'
import Welcome from './scenes/Welcome'
import PreferencesNavigator from './scenes/Preferences'
import Settings from './scenes/Settings'

const WelcomeStack = createSwitchNavigator(
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

const MainStack = createBottomTabNavigator(
  {
    Preferences: {
      screen: PreferencesNavigator,
      navigationOptions: () => ({
        header: null,
        tabBarLabel: i18n.t( 'Preferences.tab' )
      }),
    },
    Scan: {
      screen: PreferencesNavigator,
      navigationOptions: () => ({
        header: null,
        tabBarLabel: i18n.t( 'Scan.tab' )
      }),
    },
    Settings: {
      screen: Settings,
      navigationOptions: () => ({
        header: null,
        tabBarLabel: i18n.t( 'Settings.tab' )
      }),
    }
  },
  {
    initialRouteName: 'Scan'
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
      screen: WelcomeStack,
      navigationOptions: () => ({
        header: null,
      }),
    },
    MainStack: {
      screen: MainStack,
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

    store.dispatch( settingsInit() ); // TODO: move this and do smarter initialize
    store.dispatch( preferencesInit() );
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
