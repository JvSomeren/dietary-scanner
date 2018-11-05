import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';

import base from '../../../styles/base.scss'

type Props = {};
export default class List extends Component<Props> {
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={base.container}>
        <Text>List</Text>
        <Button
          title={"Skip"}
          onPress={() => {
            navigate( 'MainStack' );
          }
          } />
        <Button
          title={"Review"}
          onPress={() => {
            navigate( 'Review' );
          }
          } />
      </View>
    );
  }
}
