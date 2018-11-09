import React, { Component } from 'react';
import { connect } from "react-redux";

import base from '../../styles/base.scss'
import { List, ListItem } from "react-native-elements";
import i18n from "../../i18n";
import { updateLanguage } from "../../services/settings/service";

type Props = {};

class LanguageList extends Component<Props> {
  constructor( props ) {
    super( props );
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
    return (
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
)( LanguageList );
