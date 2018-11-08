import React, { Component } from 'react';
import { Text, Button, View } from 'react-native';
import { List, ListItem, Divider } from 'react-native-elements';
import { connect } from "react-redux";
import i18n from '../../i18n'
import { toListArray } from "../../services/helpers";
import { updateLanguage } from "../../services/settings/service";

import base from '../../styles/base.scss'
import styles from './styles.scss'

type Props = {};

class Welcome extends Component<Props> {
  _onPressItem = ( language ) => {
    if ( language !== i18n.locale )
      this.props.updateLanguage( language );
  };

  _subtitle = ( item ) => {
    return item.key === i18n.locale ? i18n.t( 'selected' ).capitalize() : null;
  };

  _leftIcon = ( item ) => {
    return item.key === i18n.locale ? { name: 'check' } : { name: 'remove' }
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={base.container}>
        <View style={base.flexCenter}>
          <Text style={styles.welcome}>{i18n.t( 'Welcome.welcome' )}!</Text>
          <Divider style={base.divider} />
          <Text style={styles.instructions}>Pick your dietary preferences by
            pressing <Text>{i18n.t( 'next' )}</Text>.</Text>
        </View>

        <List containerStyle={[ base.flex, base.stretch ]}>
          {
            toListArray( i18n.translations ).map( ( item ) => (
              <ListItem
                key={item.key}
                title={i18n.t( 'Translations.' + item.key ).capitalize()}
                subtitle={this._subtitle( item )}
                hideChevron
                leftIcon={this._leftIcon( item )}
                onPress={() => this._onPressItem( item.key )}
              />
            ) )
          }
        </List>

        <View style={base.flexCenter}>
          <Button
            title={i18n.t( 'next' ).capitalize()}
            onPress={() => {
              navigate( 'List' );
            }} />
        </View>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateLanguage: ( language ) => dispatch( updateLanguage( language ) )
  }
};

export default connect(
  null,
  mapDispatchToProps
)( Welcome );
