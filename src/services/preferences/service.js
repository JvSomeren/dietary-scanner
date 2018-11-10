import { PreferencesAction } from "./actions";
import { getAvailableAllergies } from "./api";
import { _getItem, _setItem } from "../AsyncStorage";

export const init = () => {
  return ( dispatch ) => {
    dispatch( PreferencesAction.init() );

    Promise.all( [
      getAvailableAllergies(),
      _getItem( 'dietaryPreferences' )
    ] )
      .then( responses => {
        const data = {
          availableAllergies: responses[ 0 ],
          dietaryPreferences: !!responses[ 1 ] ? JSON.parse( responses[ 1 ] ) : []
        };

        dispatch( PreferencesAction.initSuccess( data ) );
      } )
      .catch( error => {
        console.error( error );
      } )
  }
};

export const addDietaryPreference = ( preference ) => {
  return ( dispatch, getState ) => {
    const oldState = getState().preferences;

    dispatch( PreferencesAction.addDietaryPreference( preference ) );
    dispatch( PreferencesAction.addDietaryPreferenceSuccess( {} ) );
  }
};

export const removeDietaryPreference = ( preferenceId ) => {
  return ( dispatch, getState ) => {
    const oldState = getState().preferences;

    dispatch( PreferencesAction.removeDietaryPreference( preferenceId ) );
    dispatch( PreferencesAction.removeDietaryPreferenceSuccess( {} ) );
  }
};

export const storeDietaryPreferences = () => {
  return ( dispatch, getState ) => {
    const state = getState().preferences;

    dispatch( PreferencesAction.storeDietaryPreferences() );

    _setItem( 'dietaryPreferences', JSON.stringify( state.dietaryPreferences ) )
      .then( response => {
        dispatch( PreferencesAction.storeDietaryPreferencesSuccess( response ) );
      } )
      .catch( error => {
        dispatch( PreferencesAction.storeDietaryPreferencesFailure( error ) );
      } )
  }
};
