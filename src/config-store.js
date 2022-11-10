import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import { createLogger } from 'redux-logger';
const loggerMiddleware = process.env.NODE_ENV === 'development' ? createLogger() : {};
const sagaMiddleware = createSagaMiddleware();
const { composeWithDevTools } = require("redux-devtools-extension");
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import reducer from "./reducers";
import { createWrapper } from "next-redux-wrapper";

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== "production") {
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  const composeEnhancers = composeWithDevTools({});
  const enhancer = composeEnhancers(applyMiddleware(...middleware));
  return enhancer;
};

const initStore = () => {
  const store = createStore(reducer, bindMiddleware([thunkMiddleware,sagaMiddleware,loggerMiddleware]));
  sagaMiddleware.run(rootSaga);
  return store;
};

export const wrapper = createWrapper(initStore);
