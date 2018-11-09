import React, { Component } from 'react';
import { Text, Button, View } from 'react-native';
import { List, ListItem, Divider } from 'react-native-elements';
import { connect } from "react-redux";
import i18n from '../../i18n'
import { toListArray } from "../../services/helpers";
import { updateLanguage } from "../../services/settings/service";

import base from '../../styles/base.scss'
import styles from './styles.scss'
import LanguageList from "../../components/LanguageList";

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
          <Text style={styles.welcome}>{i18n.t( 'Welcome.welcome' )}!</Text>
          <Divider style={base.divider} />
          <Text style={styles.instructions}>Pick your dietary preferences by
            pressing <Text>{i18n.t( 'next' )}</Text>.</Text>
        </View>

        <LanguageList />

        <View style={base.flexCenter}>
          <Button
            title={i18n.t( 'next' ).capitalize()}
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
