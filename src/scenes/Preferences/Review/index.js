import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';

import base from '../../../styles/base.scss'

type Props = {};
export default class Review extends Component<Props> {
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={base.container}>
        <Text>Review</Text>
        <Button
          title={"Change"}
          onPress={() => {
            navigate( 'List' );
          }
          } />
        <Button
          title={"Confirm"}
          onPress={() => {
            navigate( 'MainStack' );
          }
          } />
      </View>
    );
  }
}
