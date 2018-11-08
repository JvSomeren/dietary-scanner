import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';

import base from '../../../styles/base.scss'
import { connect } from "react-redux";
import { Divider, List as RNEList, ListItem, Text as RNEText } from "react-native-elements";
import i18n from "../../../i18n";
import { storeDietaryPreferences } from "../../../services/preferences/service";

type Props = {};

class Review extends Component<Props> {
  constructor( props ) {
    super( props );
  }

  _onConfirm = () => {
    const { navigate } = this.props.navigation;

    this.props.storeDietaryPreferences();

    navigate( 'MainStack' );
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={base.container}>
        <View style={base.flexCenter}>
          <RNEText h1 style={base.textCenter}>{i18n.t( 'Preferences.preferences' ).capitalize()}</RNEText>
          <Divider style={base.divider} />
          <Text>Confirm your preferences by pressing <Text>{i18n.t( 'confirm' )}</Text>.</Text>
        </View>

        {this.props.dietaryPreferences.length ? (
          <RNEList containerStyle={[ base.flex, base.stretch ]}>
            {
              this.props.dietaryPreferences.map( ( item ) => (
                <ListItem
                  key={item.id}
                  title={i18n.t( 'Preferences.allergies.' + item.name ).capitalize()}
                  hideChevron
                />
              ) )
            }
          </RNEList>
        ) : (
          <Text>Nothing</Text>
        )}


        <View style={[ base.flexCenter, base.horizontalContainer ]}>
          <Button
            title={"Change"}
            onPress={() => {
              navigate( 'List' ); // TODO: add alert
            }
            } />
          <Button
            title={"Confirm"}
            onPress={() => this._onConfirm()}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    dietaryPreferences: state.preferences.dietaryPreferences
  }
};

const mapDispatchToProps = dispatch => {
  return {
    storeDietaryPreferences: () => dispatch( storeDietaryPreferences() )
}
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)( Review );
