import { scanType } from "./types";

const INITIAL_STATE = {
  loading: false,
  product: {}
};

export const scanReducer = ( state = INITIAL_STATE, action ) => {
  switch ( action.type ) {
    case scanType.GET_PRODUCT:
      return { ...state, loading: true };
    case scanType.GET_PRODUCT_SUCCESS:
      return { ...state, product: action.payload.product, loading: false };
    case scanType.GET_PRODUCT_FAILURE:
      return { ...action.payload.oldState, error: action.payload.error, loading: false};

    default:
      return state;
  }
};
