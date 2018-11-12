import React, { Component } from 'react';
import { Button, View } from 'react-native';
import { connect } from "react-redux";
import { resetAll } from "../../../services/settings/service";

import base from '../../../styles/base.scss'
import i18n from "../../../i18n";

type Props = {};

class ResetAll extends Component<Props> {
  constructor( props ) {
    super( props );
  }

  render() {
    return (
      <View style={base.flexCenter}>
        <Button
          title={i18n.t( 'Settings.reset all' ).capitalize()}
          onPress={() => {
            this.props.resetAll();
            // navigate( 'SplashScreen' );
          }}
        />
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
)( ResetAll );
