import React, { Component } from 'react';
import { View, Button } from 'react-native';
import { connect } from "react-redux";

import base from '../../../styles/base.scss'
import i18n from "../../../i18n";
import { resetAll } from "../../../services/settings/service";
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
      { name: 'reset all', navigationTargetName: '' }
    ];

    return (
      <View style={base.container}>
        <List containerStyle={[ base.flex, base.stretch ]}>
          {
            list.map( ( item ) => (
              <ListItem
                key={item.name}
                title={i18n.t( 'Settings.' + item.name ).capitalize()}
                onPress={() => this._onPress( item.navigationTargetName )}
              />
            ) )
          }
        </List>

        <Button
          title={"Reset all"}
          onPress={() => {
            this.props.resetAll();
            // navigate( 'SplashScreen' );
          }} />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.settings.loading
  }
};

const mapDispatchToProps = dispatch => {
  return {
    resetAll: () => dispatch( resetAll() )
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)( SettingsList );
