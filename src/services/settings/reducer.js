import { settingsType } from "./types";

const INITIAL_STATE = {
  loading: false,
  repeatUser: null,
  languages: [],
  language: null
};

export const settingsReducer = ( state = INITIAL_STATE, action ) => {
  switch ( action.type ) {
    case settingsType.INIT:
      return { ...state, loading: true };
    case settingsType.INIT_SUCCESS:
      return { ...action.payload.state, loading: false};

    case settingsType.RESET_ALL:
      return { ...INITIAL_STATE, loading: true };


    case settingsType.SET_REPEAT_USER:
      return { ...state, repeatUser: true };
    case settingsType.SET_REPEAT_USER_FAILURE:
      return { ...action.payload.oldState, error: error.payload.error };

    case settingsType.UPDATE_LANGUAGE:
      return { ...state, loading: true, language: action.payload.data };

    case settingsType.RESET_ALL_SUCCESS:
    case settingsType.UPDATE_LANGUAGE_SUCCESS:
      return { ...state, loading: false };

    case settingsType.RESET_ALL_FAILURE:
    case settingsType.UPDATE_LANGUAGE_FAILURE :
      return { ...action.payload.oldState, loading: false, error: action.payload.error };

    case settingsType.SET_REPEAT_USER_SUCCESS:

    default:
      return state;
  }
};
