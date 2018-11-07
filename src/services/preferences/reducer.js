import { preferencesType } from "./types";

const INITIAL_STATE = {
  loading: false,
};

export const preferencesReducer = ( state = INITIAL_STATE, action ) => {
  switch ( action.type ) {
    case preferencesType.INIT:
      return { ...state, loading: true };
    case preferencesType.INIT_SUCCESS:
      return { ...action.payload.state, loading: false};

    default:
      return state;
  }
};
