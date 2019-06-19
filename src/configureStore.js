
import createReducer from './reducers';
import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { createLogger } from 'redux-logger'

export default function configureStore(initialState = {}, history) {
  const middlewares = [routerMiddleware(history), createLogger()];
  const enhancers = [applyMiddleware(...middlewares)];
  const store = createStore(createReducer(), initialState, compose(...enhancers));

  return store;
}