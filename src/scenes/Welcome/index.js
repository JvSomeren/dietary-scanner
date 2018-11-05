import React, { Component } from 'react';
import { Text, Button, View } from 'react-native';
import i18n from '../../i18n'
import { capitalize } from "../../services/helpers";

import base from '../../styles/base.scss'
import styles from './styles.scss'

import Hr from '../../components/Hr'

type Props = {};
export default class Welcome extends Component<Props> {
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={base.container}>
        <View>
          <Text style={styles.welcome}>{i18n.t( 'Welcome.welcome' )}!</Text>
          <Hr />
          <Text style={styles.instructions}>Pick your dietary preferences by
            pressing <Text>{i18n.t( 'next' )}</Text>.</Text>
        </View>
        <View>
          <Text>{i18n.t( 'Welcome.pick-language' )}</Text>
        </View>
        <Button
          title={i18n.t( 'next' ).capitalize()}
          onPress={() => {
            navigate( 'List' );
          }
          } />
      </View>
    );
  }
}
