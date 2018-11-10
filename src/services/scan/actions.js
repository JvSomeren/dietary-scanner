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
}
