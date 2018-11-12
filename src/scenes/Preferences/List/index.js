import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';
import { connect } from "react-redux";
import base from '../../../styles/base.scss'
import i18n from "../../../i18n";
import { Divider, List as RNEList, ListItem, Text as RNEText } from "react-native-elements";
import { addDietaryPreference, removeDietaryPreference } from "../../../services/preferences/service";
import { setRepeatUser } from "../../../services/settings/service";


type Props = {};

class List extends Component<Props> {
  constructor( props ) {
    super( props );
  }

  _bold = ( content ) => {
    return <Text style={{ fontWeight: 'bold' }}>{content}</Text>
  };

  _title = ( item ) => {
    const ingredientEle = this._bold( i18n.t( 'Preferences.allergies.' + item.name ).capitalize() );
    const prefixText = this.props.dietaryPreferences.filter( p => p.id === item.id ).length ?
      <Text>{i18n.t( 'Preferences.i do' ).capitalize()} {this._bold( i18n.t( 'Preferences.not' ) )} {i18n.t( 'Preferences.want' )}</Text> :
      i18n.t( 'Preferences.i do want' ).capitalize();
    return <Text>{prefixText} {ingredientEle}</Text>;
  };

  _leftIcon = ( item ) => {
    return this.props.dietaryPreferences.filter( p => p.id === item.id ).length ? { name: 'remove' } : { name: 'add' };
  };

  _onPress = ( item ) => {
    if ( this.props.dietaryPreferences.filter( p => p.id === item.id ).length )
      this.props.removeDietaryPreference( item.id );
    else
      this.props.addDietaryPreference( item );
  };

  _skip = () => {
    const { navigate } = this.props.navigation;

    if ( !this.props.repeatUser )
      this.props.setRepeatUser();

    navigate( 'MainStack' );
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={base.container}>
        <View style={base.flexCenter}>
          <RNEText h1 style={base.textCenter}>{i18n.t( 'Preferences.preferences' ).capitalize()}</RNEText>
          <Divider style={base.divider} />
          <Text>{i18n.t( 'Preferences.pick preferences' ).capitalize()}
            <Text>{i18n.t( 'Preferences.review' )}</Text>.</Text>
        </View>

        <RNEList containerStyle={[ base.flex, base.stretch ]}>
          {
            this.props.availableAllergies.map( ( item ) => (
              <ListItem
                key={item.id}
                title={this._title( item )}
                // leftIcon={this._leftIcon( item )}
                onPress={() => this._onPress( item )}
                hideChevron
              />
            ) )
          }
        </RNEList>

        <View style={[ base.flexCenter, base.horizontalContainer ]}>
          {!this.props.repeatUser &&
          <Button
            title={i18n.t( 'Preferences.skip' ).capitalize()}
            onPress={() => {
              this._skip(); // TODO: add alert
            }}
          />
          }
          <Button
            title={i18n.t( 'Preferences.review' ).capitalize()}
            onPress={() => {
              navigate( 'Review' );
            }}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.preferences.loading,
    availableAllergies: state.preferences.availableAllergies,
    dietaryPreferences: state.preferences.dietaryPreferences,
    repeatUser: state.settings.repeatUser
  }
};

const mapDispatchToProps = dispatch => {
  return {
    addDietaryPreference: ( preference ) => dispatch( addDietaryPreference( preference ) ),
    removeDietaryPreference: ( preferenceId ) => dispatch( removeDietaryPreference( preferenceId ) ),
    setRepeatUser: () => dispatch( setRepeatUser() )
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)( List );
