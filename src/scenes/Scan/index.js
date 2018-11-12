import { createSwitchNavigator } from "react-navigation";

import Base from './Base'
import Scanning from './Scanning'
import Feedback from './Feedback'

const ScanNavigator = createSwitchNavigator(
  {
    ScanBase: {
      screen: Base
    },
    Scanning: {
      screen: Scanning
    },
    Feedback: {
      screen: Feedback
    }
  },
  {
    initialRouteName: 'Scanning',
    backBehavior: 'initialRoute'
  }
);

export default ScanNavigator;