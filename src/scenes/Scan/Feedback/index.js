import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from "react-redux";

import base from '../../styles/base.scss'

type Props = {};

class Feedback extends Component<Props> {
  constructor( props ) {
    super( props );
  }

  render() {
    return (
      <View style={base.container}>

      </View>
    );
  }
}

export default connect(

)( Feedback );
