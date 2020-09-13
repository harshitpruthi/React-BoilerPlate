import { createStore, compose, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { middleware as reduxPack } from 'redux-pack';
import rootReducer from './rootReducer';

const middlewares = [
  reduxThunk.withExtraArgument({ request: null }),
  reduxPack,
].filter(Boolean);

const storeEnhancers = [
  applyMiddleware(...middlewares),
  window && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), //__BROWSER__ && __LOCAL__ && window.devToolsExtension && window.devToolsExtension(),
].filter(Boolean);

export default (initialState) =>
  createStore(
    rootReducer,
    initialState,
    compose(...storeEnhancers),
  );
