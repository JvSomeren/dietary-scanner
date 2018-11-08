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

    case settingsType.UPDATE_LANGUAGE:
      return { ...state, loading: true, language: action.payload.data };
    case settingsType.UPDATE_LANGUAGE_SUCCESS:
      return { ...state, loading: false };
    case settingsType.UPDATE_LANGUAGE_FAILURE :
      return { ...action.payload.oldState, loading: false, error: action.payload.error };

    default:
      return state;
  }
};
