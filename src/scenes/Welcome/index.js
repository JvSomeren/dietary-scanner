import React, { Component } from 'react';
import { Text, Button, View } from 'react-native';

import base from '../../assets/base.scss'
import styles from './styles.scss'

import Hr from '../../components/Hr'

type Props = {};
export default class Welcome extends Component<Props> {
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={base.container}>
        <View>
          <Text style={styles.welcome}>Welcome!</Text>
          <Hr />
          <Text style={styles.instructions}>Pick your dietary preferences by pressing <Text>Next</Text>.</Text>
        </View>
        <View>
          <Text>Pick language</Text>
        </View>
        <Button
          title={"Next"}
          onPress={() => {
            navigate( 'List' );
          }
        } />
      </View>
    );
  }
}
