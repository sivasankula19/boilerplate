import rootReducer from "../Reducer/index"
import {createStore} from 'redux'
// import { persistReducer, persistStore } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'

// const persistConfig= {key:'root',storage}
// const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store=createStore(rootReducer);

// export const persistor = persistStore(store)

export  default store;