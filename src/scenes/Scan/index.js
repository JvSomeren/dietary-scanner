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
    initialRouteName: 'ScanBase',
  }
);

export default ScanNavigator;