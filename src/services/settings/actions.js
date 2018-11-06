import { settingsType } from "./types";

export class SettingsAction {
  static init = () => {
    return {
      type: settingsType.INIT
    }
  };

  static initSuccess = ( state ) => {
    return {
      type: settingsType.INIT_SUCCESS,
      payload: {
        state
      }
    }
  };

  static updateLanguage = ( language ) => {
    return {
      type: settingsType.UPDATE_LANGUAGE,
      payload: {
        data: language
      }
    }
  };

  static updateLanguageSuccess = ( response ) => {
    return {
      type: settingsType.UPDATE_LANGUAGE_SUCCESS,
      payload: {
        response
      }
    }
  };

  static updateLanguageFailure = ( response, oldState ) => {
    return {
      type: settingsType.UPDATE_LANGUAGE_FAILURE,
      payload: {
        error: response,
        oldState
      }
    }
  };
}
