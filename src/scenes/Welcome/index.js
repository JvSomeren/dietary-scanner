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
  constructor( props ) {
    super( props );

    this.languages = i18n.translations;
  }

  _onPressItem = ( language ) => {
    if ( language !== this.props.language )
      this.props.updateLanguage( language );
  };

  _subtitle = ( item ) => {
    return item === this.props.language ? i18n.t( 'selected' ).capitalize() : null;
  };

  _leftIcon = ( item ) => {
    return item === this.props.language ? { name: 'check' } : { name: 'remove' };
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
            this.props.languages.map( ( item ) => (
              <ListItem
                key={item}
                title={i18n.t( 'Translations.' + item ).capitalize()}
                subtitle={this._subtitle( item )}
                hideChevron
                leftIcon={this._leftIcon( item )}
                onPress={() => this._onPressItem( item )}
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

const mapStateToProps = state => {
  return {
    loading: state.settings.loading,
    languages: state.settings.languages,
    language: state.settings.language
  }
};

const mapDispatchToProps = dispatch => {
  return {
    updateLanguage: ( language ) => dispatch( updateLanguage( language ) )
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)( Welcome );
