import React, { Component } from 'react';
import { View } from 'react-native';

import styles from "./styles.scss";

type Props = {};
export default class HrComponent extends Component<Props> {
  render() {
    return (
      <View style={styles.hr} />
    );
  }
}
