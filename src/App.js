import React, { Component } from 'react'
import { createBottomTabNavigator, createSwitchNavigator } from 'react-navigation'
import RNLanguages from 'react-native-languages'
import i18n from './i18n'

import Welcome from './scenes/Welcome'
import PreferencesNavigator from './scenes/Preferences'

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
      }),
    },
    Scan: {
      screen: PreferencesNavigator
    },
    Settings: {
      screen: PreferencesNavigator
    }
  },
  {
    initialRouteName: 'Scan'
  }
);

const RootStack = createSwitchNavigator(
  {
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
    initialRouteName: 'WelcomeStack',
  }
);

type Props = {};
export default class App extends Component<Props> {
  componentWillMount() {
    RNLanguages.addEventListener( 'change', this._onLanguagesChange );
  }

  componentWillUnmount() {
    RNLanguages.removeEventListener( 'change', this._onLanguagesChange );
  }

  _onLanguagesChange = ( { language } ) => {
    i18n.locale = language;
  };

  render() {
    return <RootStack />
  }
}
