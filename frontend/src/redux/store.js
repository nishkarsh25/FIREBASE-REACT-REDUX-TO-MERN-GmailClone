import { combineReducers, configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
  }

  const rootReducer = combineReducers({
    app:appSlice
 })

const persistedReducer = persistReducer(persistConfig, rootReducer)


