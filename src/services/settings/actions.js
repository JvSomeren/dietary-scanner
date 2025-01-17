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

  static resetAll = () => {
    return {
      type: settingsType.RESET_ALL
    }
  };

  static resetAllSuccess = ( response ) => {
    return {
      type: settingsType.RESET_ALL_SUCCESS,
      payload: {
        response
      }
    }
  };

  static resetAllFailure = ( response, oldState ) => {
    return {
      type: settingsType.RESET_ALL_FAILURE,
      payload: {
        error: response,
        oldState
      }
    }
  };

  static setRepeatUser = () => {
    return {
      type: settingsType.SET_REPEAT_USER
    }
  };

  static setRepeatUserSuccess = ( response ) => {
    return {
      type: settingsType.SET_REPEAT_USER_SUCCESS,
      payload: {
        response
      }
    }
  };

  static setRepeatUserFailure = ( response, oldState ) => {
    return {
      type: settingsType.SET_REPEAT_USER_FAILURE,
      payload: {
        error: response,
        oldState
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
