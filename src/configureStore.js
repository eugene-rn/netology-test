
import createReducer from './reducers';
import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import { routerMiddleware } from 'connected-react-router';
import { createLogger } from 'redux-logger'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['employees']
}

export default function configureStore(initialState = {}, history) {
  const persistedReducer = persistReducer(persistConfig, createReducer())
  const middlewares = [routerMiddleware(history), createLogger()];
  const enhancers = [applyMiddleware(...middlewares)];
  const store = createStore(persistedReducer, initialState, compose(...enhancers));
  const persistor = persistStore(store)

  return { store, persistor };
}