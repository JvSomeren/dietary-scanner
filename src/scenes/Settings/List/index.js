import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from "react-redux";

import base from '../../../styles/base.scss'
import i18n from "../../../i18n";
import { List, ListItem } from "react-native-elements";

type Props = {};

class SettingsList extends Component<Props> {
  constructor( props ) {
    super( props );
  }

  _onPress = ( targetName ) => {
    const { navigate } = this.props.navigation;

    navigate( targetName );
  };

  render() {
    const list = [
      { name: 'language', navigationTargetName: 'SettingsLanguage' },
      { name: 'reset all', navigationTargetName: 'SettingsResetAll' }
    ];

    return (
      <View style={base.container}>
        <List containerStyle={[ base.flex, base.stretch ]}>
          {
            list.map( ( item ) => (
              <ListItem
                key={item.name}
                titleStyle={{ fontSize: 20 }}
                title={i18n.t( 'Settings.' + item.name ).capitalize()}
                onPress={() => this._onPress( item.navigationTargetName )}
              />
            ) )
          }
        </List>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.settings.loading
  }
};

export default connect(
  mapStateToProps
)( SettingsList );
