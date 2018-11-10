import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from "react-redux";
import { withNavigationFocus } from 'react-navigation'
import { Button, Icon } from 'react-native-elements'

import base from '../../../styles/base.scss'

type Props = {};

class Base extends Component<Props> {
  constructor( props ) {
    super( props );
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={base.container}>
        <Button onPress={() => navigate( 'Scanning' )} title={"Go to scanning"} />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {

  }
};

const mapDispatchToProps = dispatch => {
  return {

  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)( withNavigationFocus( Base ) );
