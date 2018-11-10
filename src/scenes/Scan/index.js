import { createSwitchNavigator } from "react-navigation";

import Base from './Base'
import Scanning from './Scanning'

const ScanNavigator = createSwitchNavigator(
  {
    ScanBase: {
      screen: Base
    },
    Scanning: {
      screen: Scanning
    }
  },
  {
    initialRouteName: 'ScanBase',
  }
);

export default ScanNavigator;