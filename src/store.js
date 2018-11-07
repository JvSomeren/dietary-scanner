import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import barcodesReducer from './services/barcodes'
import preferencesReducer from './services/preferences'
import settingsReducer from './services/settings'


export const store = createStore(
  combineReducers( {
    barcodes: barcodesReducer,
    preferences: preferencesReducer,
    settings: settingsReducer
  } ),
  applyMiddleware( thunk )
);
