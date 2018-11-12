import { ScanAction } from "./actions";
import { getProduct as _getProduct } from "./api";

export const getProduct = ( barCodeType, productBarCode, extraServices = [] ) => {
  return ( dispatch, getState ) => {
    const oldState = getState().scan;

    dispatch( ScanAction.getProduct() );

    _getProduct( barCodeType, productBarCode )
      .then( product => {
        dispatch( ScanAction.getProductSuccess( product ) );

        for( let service of extraServices )
          dispatch( service );
      } )
      .catch( error => {
        dispatch( ScanAction.getProductFailure( error, oldState ) );
      } );
  }
};

export const checkCanEat = () => {
  return ( dispatch, getState ) => {
    const oldState = getState().scan;
    const { product } = oldState;
    const { dietaryPreferences } = getState().preferences;

    dispatch( ScanAction.checkCanEat() );

    try {
      let canEat;
      let unwantedIngredients = [];

      for ( let a of product.allergyInformation ) {
        let tmp = dietaryPreferences.filter( d => d.name === a.name );

        if ( tmp.length )
          unwantedIngredients.push( tmp[ 0 ] );
      }

      canEat = !unwantedIngredients.length;

      dispatch( ScanAction.checkCanEatSuccess( { canEat, unwantedIngredients } ) );
    } catch ( error ) {
      dispatch( ScanAction.checkCanEatFailure( error, oldState ) );
    }
  }
};
