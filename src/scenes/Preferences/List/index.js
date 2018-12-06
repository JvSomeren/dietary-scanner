import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from "react-redux";
import base from '../../../styles/base.scss'
import i18n from "../../../i18n";
import { Divider, List as RNEList, ListItem, Text as RNEText } from "react-native-elements";
import { setTmpDietaryPreferences } from "../../../services/preferences/service";
import { setRepeatUser } from "../../../services/settings/service";
import IngredientsList from "../../../components/IngredientsList";
import ButtonLarge from "../../../components/ButtonLarge";


type Props = {};

class List extends Component<Props> {
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
    const ingredientEle = this._bold( i18n.t( 'Preferences.allergies.' + item.name ).capitalize() );
    const prefixText = this.state.dietaryPreferences.filter( p => p.id === item.id ).length ?
      <Text>{i18n.t( 'Preferences.i do' ).capitalize()} {this._bold( i18n.t( 'Preferences.not' ) )} {i18n.t( 'Preferences.want' )}</Text> :
      i18n.t( 'Preferences.i do want' ).capitalize();
    return <Text>{prefixText} {ingredientEle}</Text>;
  };

  _leftIcon = ( item ) => {
    return this.state.dietaryPreferences.filter( p => p.id === item.id ).length ? { name: 'remove' } : { name: 'add' };
  };

  _onPress = ( item ) => {
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
          <Text style={{ fontSize: 16, textAlign: 'center' }}>{i18n.t( 'Preferences.pick preferences' ).capitalize() + ' '}
            <Text style={{ fontSize: 16, textAlign: 'center' }}>{i18n.t( 'Preferences.review' )}</Text>.</Text>
        </View>

        <IngredientsList onPress={this._onPress} />

        <View style={[ base.flexCenter, base.horizontalContainer ]}>
          <ButtonLarge
            title={i18n.t( 'confirm' ).capitalize()}
            onPress={() => {
              this.props.setTmpDietaryPreferences( this.state.dietaryPreferences );
              navigate( 'Scan' );
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
    setRepeatUser: () => dispatch( setRepeatUser() ),
    setTmpDietaryPreferences: ( dietaryPreferences ) => dispatch( setTmpDietaryPreferences( dietaryPreferences ) )
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)( List );
