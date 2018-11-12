import React, { Component } from 'react';
import { Button, View } from 'react-native';
import { connect } from "react-redux";
import { resetAll } from "../../../services/settings/service";

import base from '../../../styles/base.scss'

type Props = {};

class ResetAll extends Component<Props> {
  constructor( props ) {
    super( props );
  }

  render() {
    return (
      <View style={base.flexCenter}>
        <Button
          title={"Reset all"}
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
  mapDispatchToProps
)( ResetAll );
