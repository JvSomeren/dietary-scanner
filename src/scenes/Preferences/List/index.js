import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';
import { connect } from "react-redux";
import base from '../../../styles/base.scss'
import i18n from "../../../i18n";
import { Divider, List as RNEList, ListItem, Text as RNEText } from "react-native-elements";
import { addDietaryPreference, removeDietaryPreference } from "../../../services/preferences/service";


type Props = {};

class List extends Component<Props> {
  constructor( props ) {
    super( props );
  }

  _onPress = ( item ) => {
    if ( this.props.dietaryPreferences.filter( p => p.id === item.id ).length )
      this.props.removeDietaryPreference( item.id );
    else
      this.props.addDietaryPreference( item );
  };

  _leftIcon = ( item ) => {
    return this.props.dietaryPreferences.filter( p => p.id === item.id ).length ? { name: 'remove' } : { name: 'add' };
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={base.container}>
        <View style={base.flexCenter}>
          <RNEText h1 style={base.textCenter}>{i18n.t( 'Preferences.preferences' ).capitalize()}</RNEText>
          <Divider style={base.divider} />
          <Text>Pick your dietary preferences by
            pressing <Text>{i18n.t( 'next' )}</Text>.</Text>
        </View>

        <RNEList containerStyle={[ base.flex, base.stretch ]}>
          {
            this.props.availableAllergies.map( ( item ) => (
              <ListItem
                key={item.id}
                title={i18n.t( 'Preferences.allergies.' + item.name ).capitalize()}
                leftIcon={this._leftIcon( item )}
                onPress={() => this._onPress( item )}
                hideChevron
              />
            ) )
          }
        </RNEList>

        <View style={[ base.flexCenter, base.horizontalContainer ]}>
          <Button
            title={"Skip"}
            onPress={() => {
              navigate( 'MainStack' ); // TODO: add alert
            }
            } />
          <Button
            title={"Review"}
            onPress={() => {
              navigate( 'Review' );
            }
            } />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.preferences.loading,
    availableAllergies: state.preferences.availableAllergies,
    dietaryPreferences: state.preferences.dietaryPreferences
  }
};

const mapDispatchToProps = dispatch => {
  return {
    addDietaryPreference: ( preference ) => dispatch( addDietaryPreference( preference ) ),
    removeDietaryPreference: ( preferenceId ) => dispatch( removeDietaryPreference( preferenceId ) )
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)( List );
