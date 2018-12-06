import { preferencesType } from "./types";

export class PreferencesAction {
  static init = () => {
    return {
      type: preferencesType.INIT
    }
  };

  static initSuccess = ( state ) => {
    return {
      type: preferencesType.INIT_SUCCESS,
      payload: {
        state
      }
    }
  };

  static addDietaryPreference = ( preference ) => {
    return {
      type: preferencesType.ADD_DIETARY_PREFERENCE,
      payload: {
        preference
      }
    }
  };

  static addDietaryPreferenceSuccess = ( response ) => {
    return {
      type: preferencesType.ADD_DIETARY_PREFERENCE_SUCCESS,
      payload: {
        response
      }
    }
  };

  static addDietaryPreferenceFailure = ( response, oldState ) => {
    return {
      type: preferencesType.ADD_DIETARY_PREFERENCE_FAILURE,
      payload: {
        error: response,
        oldState
      }
    }
  };

  static removeDietaryPreference = ( preferenceId ) => {
    return {
      type: preferencesType.REMOVE_DIETARY_PREFERENCE,
      payload: {
        preferenceId
      }
    }
  };

  static removeDietaryPreferenceSuccess = ( response ) => {
    return {
      type: preferencesType.REMOVE_DIETARY_PREFERENCE_SUCCESS,
      payload: {
        response
      }
    }
  };

  static removeDietaryPreferenceFailure = ( response, oldState ) => {
    return {
      type: preferencesType.REMOVE_DIETARY_PREFERENCE_FAILURE,
      payload: {
        error: response,
        oldState
      }
    }
  };

  static setTmpDietaryPreferences = ( dietaryPreferences ) => {
    return {
      type: preferencesType.SET_TMP_DIETARY_PREFERENCES,
      payload: {
        dietaryPreferences
      }
    }
  };

  static setTmpDietaryPreferencesSuccess = ( response ) => {
    return {
      type: preferencesType.SET_TMP_DIETARY_PREFERENCES_SUCCESS,
      payload: {
        response
      }
    }
  };

  static setTmpDietaryPreferencesFailure = ( response, oldState ) => {
    return {
      type: preferencesType.SET_TMP_DIETARY_PREFERENCES_FAILURE,
      payload: {
        error: response,
        oldState
      }
    }
  };

  static storeDietaryPreferences = ( dietaryPreferences ) => {
    return {
      type: preferencesType.STORE_DIETARY_PREFERENCES,
      payload: {
        dietaryPreferences
      }
    }
  };

  static storeDietaryPreferencesSuccess = ( response ) => {
    return {
      type: preferencesType.STORE_DIETARY_PREFERENCES_SUCCESS,
      payload: {
        response
      }
    }
  };

  static storeDietaryPreferencesFailure = ( response ) => {
    return {
      type: preferencesType.STORE_DIETARY_PREFERENCES_FAILURE,
      payload: {
        error: response
      }
    }
  };
}
