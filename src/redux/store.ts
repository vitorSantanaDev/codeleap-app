import thunk from 'redux-thunk'
import storage from 'redux-persist/lib/storage'
import { userReducer } from './actions/user-slice'
import { persistReducer, persistStore } from 'redux-persist'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { editPostModalReducer } from './actions/edit-post-slice'
import { deletePostAlertReducer } from './actions/delete-post-slice'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user']
}

const rootReducer = combineReducers({
  user: userReducer,
  editPostModal: editPostModalReducer,
  deletePostAlert: deletePostAlertReducer
})

export const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk]
})

export type RootState = ReturnType<typeof persistedReducer>

export const persistor = persistStore(store)
