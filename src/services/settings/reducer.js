import { EXAMPLE_DO } from "./types";

const INITIAL_STATE = {

};

export const settingsReducer = ( state = INITIAL_STATE, action ) => {
  switch ( action.type ) {
    case EXAMPLE_DO:
      const newState = state;

      return newState;
    default:
      return state;
  }
};
