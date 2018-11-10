import { ScanAction } from "./actions";
import { getProduct as _getProduct } from "./api";

export const getProduct = ( barCodeType, productBarCode ) => {
  return ( dispatch, getState ) => {
    const oldState = getState().scan;

    dispatch( ScanAction.getProduct() );

    _getProduct( barCodeType, productBarCode )
      .then( product => {
        dispatch( ScanAction.getProductSuccess( product ) );
      } )
      .catch( error => {
        dispatch( ScanAction.getProductFailure( error, oldState ) );
      } );
  }
};
