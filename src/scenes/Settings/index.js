import React, { Component } from 'react';
import { View, Button } from 'react-native';
import { connect } from "react-redux";

import base from '../../styles/base.scss'
import i18n from "../../i18n";
import { resetAll } from "../../services/settings/service";

type Props = {};

class Settings extends Component<Props> {
  constructor( props ) {
    super( props );
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={base.container}>
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

const mapDispatchToProps = dispatch => {
  return {
    resetAll: () => dispatch( resetAll() )
  }
};

export default connect(
  null,
  mapDispatchToProps
)( Settings );
