const products = {
  EAN_13: [
    {
      id: 1,
      barcode: {
        barcode: '5410041005707',
        type: 'EAN_13'
      },
      name: 'Test 1', // LU Pim's
      ingredients: [],
      allergyInformation: [
        { name: 'lactose', contains: true, canContain: false },
      ]
    },
    {
      id: 2,
      barcode: {
        barcode: '8710624210243',
        type: 'EAN_13'
      },
      name: 'Test 2', //Perfekt chocoprentjes
      ingredients: [],
      allergyInformation: [
        { name: 'peanuts', contains: true, canContain: false },
      ]
    },
    {
      id: 3,
      barcode: {
        barcode: '8710400425243',
        type: 'EAN_13'
      },
      name: 'Test 3', // popcorn
      ingredients: [],
      allergyInformation: [
        { name: 'nuts', contains: true, canContain: false },
      ]
    },
    {
      id: 4,
      barcode: {
        barcode: '8713800127151',
        type: 'EAN_13'
      },
      name: 'Test 4', // Venco dropfruit duos
      ingredients: [],
      allergyInformation: [
        { name: 'gluten', contains: true, canContain: false },
      ]
    },
    {
      id: 5,
      barcode: {
        barcode: '8710908977220',
        type: 'EAN_13'
      },
      name: 'Test 5', // Cup a soup kip
      ingredients: [],
      allergyInformation: [
        { name: 'gluten', contains: true, canContain: false },
        { name: 'nuts', contains: true, canContain: false },
      ]
    },
    {
      id: 6,
      barcode: {
        barcode: '8714200212720',
        type: 'EAN_13'
      },
      name: 'Test 6', // Venco Drop
      ingredients: [],
      allergyInformation: [
        { name: 'peanuts', contains: true, canContain: false },
        { name: 'nuts', contains: true, canContain: false },
      ]
    },
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
