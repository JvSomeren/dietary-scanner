import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import barcodesReducer from './services/barcodes'
import preferencesReducer from './services/preferences'
// import scanReducer from './services/scan'
import settingsReducer from './services/settings'
import { init as settingsInit } from "./services/settings/service";
import { init as preferencesInit } from "./services/preferences/service";
import { composeWithDevTools } from 'remote-redux-devtools';

export const store = createStore(
  combineReducers( {
    barcodes: barcodesReducer,
    preferences: preferencesReducer,
    // scan: scanReducer,
    settings: settingsReducer
  } ),
  composeWithDevTools(
    applyMiddleware( thunk )
  )
);

export const initStore = () => {
  return ( dispatch ) => {
    dispatch( settingsInit() );
    dispatch( preferencesInit() );
  }
};
