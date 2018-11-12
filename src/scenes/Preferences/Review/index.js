import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';

import base from '../../../styles/base.scss'
import { connect } from "react-redux";
import { Divider, List as RNEList, ListItem, Text as RNEText } from "react-native-elements";
import i18n from "../../../i18n";
import { storeDietaryPreferences } from "../../../services/preferences/service";
import { setRepeatUser } from "../../../services/settings/service";

type Props = {};

class Review extends Component<Props> {
  constructor( props ) {
    super( props );
  }

  _onConfirm = () => {
    const { navigate } = this.props.navigation;

    this.props.storeDietaryPreferences();

    if ( !this.props.repeatUser )
      this.props.setRepeatUser();

    navigate( 'Scan' );
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={base.container}>
        <View style={base.flexCenter}>
          <RNEText h1 style={base.textCenter}>{i18n.t( 'Preferences.preferences' ).capitalize()}</RNEText>
          <Divider style={base.divider} />
          <Text>{i18n.t( 'Preferences.confirm by' ).capitalize()} <Text>{i18n.t( 'confirm' )}</Text>.</Text>
        </View>

        {this.props.dietaryPreferencesTmp.length ? (
          <RNEList containerStyle={[ base.flex, base.stretch ]}>
            {
              this.props.dietaryPreferencesTmp.map( ( item ) => (
                <ListItem
                  key={item.id}
                  title={i18n.t( 'Preferences.allergies.' + item.name ).capitalize()}
                  hideChevron
                />
              ) )
            }
          </RNEList>
        ) : (
          <Text>{i18n.t( 'Preferences.no preferences' ).capitalize()}</Text>
        )}


        <View style={[ base.flexCenter, base.horizontalContainer ]}>
          <Button
            title={i18n.t( 'Preferences.change' ).capitalize()}
            onPress={() => {
              navigate( 'List' ); // TODO: add alert
            }
            } />
          <Button
            title={i18n.t( 'confirm' ).capitalize()}
            onPress={() => this._onConfirm()}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    repeatUser: state.settings.repeatUser,
    dietaryPreferencesTmp: state.preferences.dietaryPreferencesTmp
  }
};

const mapDispatchToProps = dispatch => {
  return {
    setRepeatUser: () => dispatch( setRepeatUser() ),
    storeDietaryPreferences: () => dispatch( storeDietaryPreferences() )
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)( Review );
