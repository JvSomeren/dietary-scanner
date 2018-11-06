import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import barcodesReducer from './services/barcodes'
import settingsReducer from './services/settings'


export const store = createStore(
  combineReducers( {
    barcodes: barcodesReducer,
    settings: settingsReducer
  } ),
  applyMiddleware( thunk )
);
