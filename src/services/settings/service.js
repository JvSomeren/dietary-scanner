import { _getAllKeys, _multiGet, _multiRemove, _setItem } from "../AsyncStorage";
import { SettingsAction } from "./actions";
import i18n from "../../i18n";

export const init = () => {
  const keys = [ 'repeatUser', 'language' ];

  return ( dispatch ) => {
    dispatch( SettingsAction.init() );

    _multiGet( keys )
      .then( response => {
        let state = response;

        state.repeatUser = (state.repeatUser === 'true');
        state.languages = Object.keys( i18n.translations );
        state.language = state.language || i18n.locale;

        i18n.locale = state.language;

        dispatch( SettingsAction.initSuccess( state ) );

        if ( response.language === null )
          dispatch( updateLanguage( state.language ) );
      } )
      .catch( error => {
        throw(error);
      } );
  }
};

export const resetAll = () => {
  return ( dispatch, getState ) => {
    const oldState = getState();

    dispatch( SettingsAction.resetAll() );

    _getAllKeys()
      .then( response => {
        _multiRemove( response )
          .then( response => {
            dispatch( SettingsAction.resetAllSuccess( response ) );
          } )
          .catch( error => {
            dispatch( SettingsAction.resetAllFailure( error, oldState ) );
          } );
      } )
      .catch( error => {
        dispatch( SettingsAction.resetAllFailure( error, oldState ) );
      } );
  }
};

export const setRepeatUser = () => {
  return ( dispatch, getState ) => {
    const oldState = getState();

    dispatch( SettingsAction.setRepeatUser() );

    _setItem( 'repeatUser', 'true' )
      .then( response => {
        dispatch( SettingsAction.setRepeatUserSuccess( response ) );
      } )
      .catch( error => {
        dispatch( SettingsAction.setRepeatUserFailure( error, oldState ) );
      } );
  }
};

export const updateLanguage = ( language ) => {
  return ( dispatch, getState ) => {
    const oldState = getState();

    dispatch( SettingsAction.updateLanguage( language ) );

    _setItem( 'language', language )
      .then( response => {
        i18n.locale = language;
        dispatch( SettingsAction.updateLanguageSuccess( response ) );
      } )
      .catch( error => {
        dispatch( SettingsAction.updateLanguageFailure( error, oldState ) );
      } );
  }
};
