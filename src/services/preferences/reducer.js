import { preferencesType } from "./types";

const INITIAL_STATE = {
  loading: false,
  availableAllergies: [],
  dietaryPreferences: []
};

export const preferencesReducer = ( state = INITIAL_STATE, action ) => {
  switch ( action.type ) {
    case preferencesType.INIT:
      return { ...state, loading: true };
    case preferencesType.INIT_SUCCESS:
      return { ...state, ...action.payload.state, loading: false };

    case preferencesType.ADD_DIETARY_PREFERENCE:
    case preferencesType.REMOVE_DIETARY_PREFERENCE:
      return { ...state, dietaryPreferences: dietaryPreferencesModelReducer( state.dietaryPreferences, action ) };

    case preferencesType.ADD_DIETARY_PREFERENCE_SUCCESS:
    case preferencesType.REMOVE_DIETARY_PREFERENCE_SUCCESS:
      return { ...state };

    case preferencesType.ADD_DIETARY_PREFERENCE_FAILURE:
    case preferencesType.REMOVE_DIETARY_PREFERENCE_FAILURE:
      return { ...action.payload.oldState, error: action.payload.error };

    default:
      return state;
  }
};

const dietaryPreferencesModelReducer = ( dietaryPreferences, action ) => {
  switch ( action.type ) {
    case preferencesType.ADD_DIETARY_PREFERENCE:
      return [ ...dietaryPreferences, action.payload.preference ];

    case preferencesType.REMOVE_DIETARY_PREFERENCE:
      return dietaryPreferences.filter( p => p.id !== action.payload.preferenceId );

    default:
      return dietaryPreferences;
  }
};
