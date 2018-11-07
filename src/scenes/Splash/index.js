import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

import base from '../../styles/base.scss'
import styles from './styles.scss'

type Props = {};
class Splash extends Component<Props> {
  componentDidMount() {
    const { navigate } = this.props.navigation;

    if(!(this.props.loading || this.props.repeatUser === null))
      if(this.props.repeatUser)
        navigate( 'MainStack' );
      else
        navigate( 'WelcomeStack' );
  }

  componentDidUpdate() {
    const { navigate } = this.props.navigation;

    if(!(this.props.loading || this.props.repeatUser === null))
      if(this.props.repeatUser)
        navigate( 'MainStack' );
      else
        navigate( 'WelcomeStack' );
  }

  render() {
    return (
      <View style={base.container}>
        <Text>Splash screen</Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.settings.loading,
    repeatUser: state.settings.repeatUser
  }
};

export default connect(
  mapStateToProps
)(Splash);
