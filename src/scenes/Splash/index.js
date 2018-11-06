import React, { Component } from 'react';
import { Text, Button, View } from 'react-native';

import base from '../../styles/base.scss'
import styles from './styles.scss'

type Props = {};
export default class Splash extends Component<Props> {
  render() {
    return (
      <View style={base.container}>
        <Text>Splash screen</Text>
      </View>
    );
  }
}
