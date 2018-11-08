import { PreferencesAction } from "./actions";
import { getAvailableAllergies } from "./api";

export const init = () => {
  return ( dispatch ) => {
    dispatch( PreferencesAction.init() );

    getAvailableAllergies()
      .then( response => {
        const data = { availableAllergies: response };

        dispatch( PreferencesAction.initSuccess( data ) );
      } )
      .catch( error => {
        throw(error);
      } );
  }
};

export const addDietaryPreference = ( preference ) => {
  return ( dispatch, getState ) => {
    const oldState = getState();

    dispatch( PreferencesAction.addDietaryPreference( preference ) );
    dispatch( PreferencesAction.addDietaryPreferenceSuccess( {} ) );
  }
};

export const removeDietaryPreference = ( preferenceId ) => {
  return ( dispatch, getState ) => {
    const oldState = getState();

    dispatch( PreferencesAction.removeDietaryPreference( preferenceId ) );
    dispatch( PreferencesAction.removeDietaryPreferenceSuccess( {} ) );
  }
};

export const storeDietaryPreferences = () => {
  return ( dispatch, getState ) => {
    const state = getState();

    dispatch( PreferencesAction.storeDietaryPreferences() );

    _setItem( 'dietaryPreferences', JSON.stringify( state.preferences.dietaryPreferences ) )
      .then( response => {
        dispatch( PreferencesAction.storeDietaryPreferencesSuccess( response ) );
      } )
      .catch( error => {
        dispatch( PreferencesAction.storeDietaryPreferencesFailure( error ) );
      } )
  }
};
