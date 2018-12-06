import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from "react-redux";

import base from '../../../styles/base.scss'
import { Divider, List, ListItem, Text as RNEText } from "react-native-elements";
import i18n from "../../../i18n";

type Props = {};

class Feedback extends Component<Props> {
  constructor( props ) {
    super( props );
  }

  renderFeedbackHeader = () => {
    const bgColor = this.props.canEat ? 'green' : 'red';

    return (
      <View style={[ base.flexCenter, base.stretch, { backgroundColor: bgColor, color: 'white' } ]}>
        {/*<RNEText h1 style={base.textCenter}>{i18n.t( 'Scan.Feedback.success' ).capitalize()}!</RNEText>*/}
        {/*<Divider style={base.divider} />*/}
        {this.props.canEat ? (
          <RNEText h2
                   style={[ base.textCenter, { color: 'white' } ]}>{i18n.t( 'Scan.Feedback.can eat' ).capitalize()}!</RNEText>
        ) : (
          <RNEText h2
                   style={[ base.textCenter, { color: 'white' } ]}>{i18n.t( 'Scan.Feedback.cannot eat' ).capitalize()}!</RNEText>
        )}
      </View>
    );
  };

  renderPositiveFeedback = () => {
    return (
      <View style={[ base.container, base.stretch ]}>
        {this.renderFeedbackHeader()}
      </View>
    );
  };

  renderNegativeFeedback = () => {
    return (
      <View style={[ base.container, base.stretch ]}>
        {this.renderFeedbackHeader()}
        <View style={[ base.container, base.stretch ]}>
          <RNEText
            style={[ base.textCenter, { fontSize: 22, marginTop: 15 } ]}>{i18n.t( 'Scan.Feedback.product contains' ).capitalize()}</RNEText>
          <List containerStyle={[ base.flex, base.stretch ]}>
            {
              this.props.unwantedIngredients.map( ( ingredient ) => (
                <ListItem
                  key={ingredient.id}
                  title={i18n.t( 'Preferences.allergies.' + ingredient.name ).capitalize()}
                  titleStyle={{ fontSize: 20 }}
                  hideChevron
                />
              ) )
            }
          </List>
        </View>
      </View>
    );
  };

  renderFeedback = () => {
    if ( this.props.loading )
      return (<Text>{i18n.t( 'loading' ).capitalize()}</Text>);
    else {
      if ( this.props.canEat )
        return this.renderPositiveFeedback();
      else
        return this.renderNegativeFeedback();
    }
  };

  render() {
    return (
      <View style={base.container}>
        {this.renderFeedback()}
        {/*<Button title={"Scan again"} onPress={() => this.props.navigation.navigate( 'Scanning' )} />*/}
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.scan.loading,
    product: state.scan.product,
    dietaryPreferences: state.preferences.dietaryPreferences,
    canEat: state.scan.canEat,
    unwantedIngredients: state.scan.unwantedIngredients
  }
};

export default connect(
  mapStateToProps
)( Feedback );
