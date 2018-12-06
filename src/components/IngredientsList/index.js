import React, { Component } from 'react';
import { connect } from 'react-redux';

import base from '../../styles/base.scss';
import i18n from '../../i18n';
import { List as RNEList, ListItem } from "react-native-elements";
import { setRepeatUser } from "../../services/settings/service";
import { setTmpDietaryPreferences } from "../../services/preferences/service";
import { Text } from "react-native";

type Props = {};

class IngredientsList extends Component<Props> {
  constructor( props ) {
    super( props );

    this.state = {
      dietaryPreferences: this.props.dietaryPreferences
    };
  }

  _bold = ( content ) => {
    return <Text style={{ fontWeight: 'bold' }}>{content}</Text>
  };

  _title = ( item ) => {
    let ingredientEle;

    if(this.state.dietaryPreferences.filter( p => p.id === item.id ).length)
      ingredientEle = this._bold( i18n.t( 'Preferences.allergies.' + item.name ).capitalize() );
    else
      ingredientEle = i18n.t( 'Preferences.allergies.' + item.name ).capitalize();

    return <Text>{ingredientEle}</Text>;
  };

  _leftIcon = ( item ) => {
    return this.state.dietaryPreferences.filter( p => p.id === item.id ).length ? { name: 'remove', color: 'white' } : { name: 'add' };
  };

  _style = ( item ) => {
    return this.state.dietaryPreferences.filter( p => p.id === item.id ).length ?
      { backgroundColor: '#ff8787' } :
      {  };
  };

  _onPress = ( item ) => {
    this.props.onPress(item);

    if ( this.state.dietaryPreferences.filter( p => p.id === item.id ).length ) {
      const preferences = this.state.dietaryPreferences.filter( p => p.id !== item.id );

      this.setState( {
        ...this.state,
        dietaryPreferences: [ ...preferences ]
      } );

    } else {
      this.setState( {
        ...this.state,
        dietaryPreferences: [ ...this.state.dietaryPreferences, item ]
      } );
    }
  };

  render() {
    return (
      <RNEList containerStyle={[ base.flex, base.stretch ]}>
        {
          this.props.availableAllergies.map( ( item ) => (
            <ListItem
              key={item.id}
              title={this._title( item )}
              leftIcon={this._leftIcon( item )}
              onPress={() => this._onPress( item )}
              hideChevron
              containerStyle={this._style( item )}
              titleStyle={{ fontSize: 20 }}
            />
          ) )
        }
      </RNEList>
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
    setRepeatUser: () => dispatch( setRepeatUser() ),
    setTmpDietaryPreferences: ( dietaryPreferences ) => dispatch( setTmpDietaryPreferences( dietaryPreferences ) )
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)( IngredientsList );
