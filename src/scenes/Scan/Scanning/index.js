import React, { Component } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { connect } from "react-redux";
import { withNavigationFocus } from "react-navigation";
import { RNCamera } from "react-native-camera";
import i18n from "../../../i18n";
import { Icon } from "react-native-elements";

import base from '../../../styles/base.scss'
import styles from './styles'

const flashModeOrder = {
  off: 'torch',
  torch: 'off',
};

type Props = {};

class Scanning extends Component<Props> {
  constructor( props ) {
    super( props );
  }

  state = {
    flash: {
      state: 'off',
      icon: 'flashlight-off'
    },
    type: {
      state: 'back',
      icon: 'camera-rear'
    },
    barCodeTypes: [
      RNCamera.Constants.BarCodeType.ean13
    ]
  };

  toggleFacing() {
    this.setState( {
      type: this.state.type.state === 'back' ?
        { state: 'front', icon: 'camera-front' } :
        { state: 'back', icon: 'camera-rear' }
    } );
  }

  toggleFlash() {
    this.setState( {
      flash: {
        state: flashModeOrder[ this.state.flash.state ],
        icon: flashModeOrder[ this.state.flash.state ] === 'off' ? 'flashlight-off' : 'flashlight'
      }
    } );
  }

  render() {
    const { isFocused } = this.props;

    return (
      <View style={styles.container}>
        {isFocused &&
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={this.state.type.state}
          flashMode={this.state.flash.state}
          permissionDialogTitle={i18n.t( 'Scan.permission.title' )}
          permissionDialogMessage={i18n.t( 'Scan.permission.message' )}
          onBarCodeRead={( { data, rawData, type } ) => {
            console.log( data, rawData, type );
          }}
          barCodeTypes={this.state.barCodeTypes}
        >
          <View
            style={{
              flex: 0.5,
              backgroundColor: 'transparent',
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}
          >
            <TouchableOpacity style={styles.flipButton} onPress={this.toggleFacing.bind( this )}>
              <Icon
                name={this.state.type.icon}
                color={"#fff"}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.flipButton} onPress={this.toggleFlash.bind( this )}>
              <Icon
                name={this.state.flash.icon}
                color={"#fff"}
                type={"material-community"}
              />
            </TouchableOpacity>
          </View>
        </RNCamera>
        }
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
)( withNavigationFocus( Scanning ) );