import React, { Component } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { connect } from "react-redux";
import { withNavigationFocus } from "react-navigation";
import { RNCamera } from "react-native-camera";
import i18n from "../../../i18n";
import { Icon } from "react-native-elements";
import { Vibration } from "react-native";
import { getProduct } from "../../../services/scan/service";

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

  close = () => {
    const { navigate } = this.props.navigation;

    navigate( 'ScanBase' );
  };

  toggleFacing = () => {
    this.setState( {
      type: this.state.type.state === 'back' ?
        { state: 'front', icon: 'camera-front' } :
        { state: 'back', icon: 'camera-rear' }
    } );
  };

  toggleFlash = () => {
    this.setState( {
      flash: {
        state: flashModeOrder[ this.state.flash.state ],
        icon: flashModeOrder[ this.state.flash.state ] === 'off' ? 'flashlight-off' : 'flashlight'
      }
    } );
  };

  _onBarCodeRead = ( { data, rawData, type } ) => {
    const { navigate } = this.props.navigation;

    Vibration.vibrate( 100 );
    this.props.getProduct( type, data );

    navigate( 'Feedback' );
  };

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
          onBarCodeRead={this._onBarCodeRead}
          barCodeTypes={this.state.barCodeTypes}
        >
          <View style={[ styles.outlineOuter, styles.buttonsAlignment ]}>
            <TouchableOpacity style={[ styles.flipButton, { marginRight: 'auto' } ]} onPress={this.close.bind( this )}>
              <Icon
                name={"close"}
                color={"#fff"}
              />
            </TouchableOpacity>
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

          <View style={styles.containerInner}>
            <View style={styles.outlineInner}>
            </View>
            <View style={styles.scanInner}>
              <View style={styles.scanLine}>
              </View>
            </View>
            <View style={styles.outlineInner}>
            </View>
          </View>

          <View style={styles.outlineOuter}>
          </View>
        </RNCamera>
        }
      </View>
    );
  }
}


const mapStateToProps = state => {
  return {}
};

const mapDispatchToProps = dispatch => {
  return {
    getProduct: ( barCodeType, productId ) => dispatch( getProduct( barCodeType, productId ) )
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)( withNavigationFocus( Scanning ) );