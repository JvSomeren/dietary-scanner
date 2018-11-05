import { combineReducers, createStore } from "redux";
import barcodesReducer from './services/barcodes'
import settingsReducer from './services/settings'


export const store = createStore( combineReducers( {
  barcodes: barcodesReducer,
  settings: settingsReducer
} ) );
