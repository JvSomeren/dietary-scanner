import { _multiGet, _setItem } from "../AsyncStorage";
import { SettingsAction } from "./actions";
import i18n from "../../i18n";

export const init = () => {
  const keys = [ 'repeatUser', 'language' ];

  return ( dispatch ) => {
    dispatch( SettingsAction.init() );

    _multiGet( keys )
      .then( response => {
        let state = { ...response };

        state.repeatUser = state.repeatUser || false;
        state.language = state.language || i18n.locale;

        dispatch( SettingsAction.initSuccess( state ) );

        if ( response.language === null )
          dispatch( updateLanguage( state.language ) );
      } )
      .catch( error => {
        throw(error);
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
