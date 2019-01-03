import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { List, Divider, Text as RNEText } from 'react-native-elements';
import { connect } from "react-redux";
import i18n from '../../i18n'
import { updateLanguage } from "../../services/settings/service";

import base from '../../styles/base.scss'
import styles from './styles.scss'
import LanguageList from "../../components/LanguageList";
import ButtonLarge from "../../components/ButtonLarge";

type Props = {};

class Welcome extends Component<Props> {
  constructor( props ) {
    super( props );
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={base.container}>
        <View style={base.flexCenter}>
          <RNEText h1 style={base.textCenter}>{i18n.t( 'Welcome.welcome' )}!</RNEText>
          <Divider style={base.divider} />
          <Text style={styles.instructions, { fontSize: 18, textAlign: 'center' }}>{i18n.t( 'Welcome.pick language' ).capitalize()}
            {/*<Text style={{ fontSize: 16, textAlign: 'center' }}> {i18n.t( 'confirm' )}</Text>.*/}
          </Text>
        </View>

        <LanguageList />

        <View style={base.flexCenter}>
          <ButtonLarge
            title={i18n.t( 'confirm' ).capitalize()}
            onPress={() => {
              navigate( 'List' );
            }} />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.settings.loading,
    languages: state.settings.languages,
    language: state.settings.language
  }
};

const mapDispatchToProps = dispatch => {
  return {
    updateLanguage: ( language ) => dispatch( updateLanguage( language ) )
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)( Welcome );
