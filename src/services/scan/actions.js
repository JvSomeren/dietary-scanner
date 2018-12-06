import { scanType } from "./types";

export class ScanAction {
  static getProduct = ( productId ) => {
    return {
      type: scanType.GET_PRODUCT
    }
  };

  static getProductSuccess = ( product ) => {
    return {
      type: scanType.GET_PRODUCT_SUCCESS,
      payload: {
        product
      }
    }
  };

  static getProductFailure = ( response, oldState ) => {
    return {
      type: scanType.GET_PRODUCT_FAILURE,
      payload: {
        error: response,
        oldState
      }
    }
  };

  static checkCanEat = ( ) => {
    return {
      type: scanType.CHECK_CAN_EAT
    }
  };

  static checkCanEatSuccess = ( response ) => {
    return {
      type: scanType.CHECK_CAN_EAT_SUCCESS,
      payload: {
        ...response
      }
    }
  };

  static checkCanEatFailure = ( response, oldState ) => {
    return {
      type: scanType.CHECK_CAN_EAT_FAILURE,
      payload: {
        error: response,
        oldState
      }
    }
  };
}
