import { createSwitchNavigator } from 'react-navigation'

import List from './List'
import Review from './Review'

const PreferencesNavigator = createSwitchNavigator(
  {
    List: List,
    Review: Review,
  },
  {
    initialRouteName: 'List',
    backBehavior: 'initialRoute'
  }
);

export default PreferencesNavigator;
