import { AsyncStorage } from 'react-native'

export const _setItem = async ( key: String, value ) => {
  try {
    await AsyncStorage.setItem( key, value );
  } catch ( error ) {
    // Error saving data
  }
};

export const _getItem = async ( key: String ) => {
  try {
    const value = await AsyncStorage.getItem( key );
    if ( value !== null ) {
      // We have data!!
    }

    return value;
  } catch ( error ) {
    // Error retrieving data
    console.error( error );
  }
};

export const _removeItem = async ( key: String ) => {
  try {
    await AsyncStorage.removeItem( key );
  } catch ( error ) {
    // Error saving data
    console.error( error );
  }
};

export const _getAllKeys = async () => {
  try {
    const keys = await AsyncStorage.getAllKeys();

    return keys;
  } catch ( error ) {
    console.log( error );
  }
};

export const _multiGet = async ( keys: Array ) => {
  try {
    const arr = await AsyncStorage.multiGet( keys );

    return arr.reduce( ( acc, cur ) => {
      acc[ cur[ 0 ] ] = cur[ 1 ];
      return acc;
    }, {} );
  } catch ( error ) {
    console.error( error );
  }
};
