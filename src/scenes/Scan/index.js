import { createSwitchNavigator } from "react-navigation";

import Base from './Base'

const ScanNavigator = createSwitchNavigator(
  {
    ScanBase: {
      screen: Base
    }
  },
  {
    initialRouteName: 'ScanBase',
  }
);

export default ScanNavigator;