const products = {
  EAN_13: [
    {
      id: 1,
      barcode: {
        barcode: '5410041005707',
        type: 'EAN_13'
      },
      name: 'Test',
      ingredients: [],
      allergyInformation: []
    }
  ]
};

export const getProduct = ( barCodeType, productBarCode ) => {
  return new Promise( ( resolve, reject ) => {
    if ( !products.hasOwnProperty( barCodeType ) )
      reject( 'BarCode of wrong type.' );

    const res = products[ barCodeType ].filter( ( product ) => product.barcode.barcode === productBarCode );

    if ( res.length )
      resolve( res[ 0 ] );
    else
      reject( `No product with barcode '${productBarCode}' has been found.` );
  } );
};
