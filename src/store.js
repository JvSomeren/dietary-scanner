import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import barcodesReducer from './services/barcodes'
import preferencesReducer from './services/preferences'
import settingsReducer from './services/settings'
import { init as settingsInit } from "./services/settings/service";
import { init as preferencesInit } from "./services/preferences/service";


export const store = createStore(
  combineReducers( {
    barcodes: barcodesReducer,
    preferences: preferencesReducer,
    settings: settingsReducer
  } ),
  applyMiddleware( thunk )
);

export const initStore = () => {
  return ( dispatch ) => {
    dispatch( settingsInit() );
    dispatch( preferencesInit() );
  }
};
