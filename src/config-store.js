import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
import { createLogger } from "redux-logger";
const loggerMiddleware =
  process.env.NODE_ENV === "development" ? createLogger() : {};
const sagaMiddleware = createSagaMiddleware();
import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import reducer from "./reducers";
import { createWrapper } from "next-redux-wrapper";

const composeEnhancers =
  (process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null) || compose;

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  const enhancer = composeEnhancers(applyMiddleware(...middleware));
  return enhancer;
};

const initStore = () => {
  const store = createStore(
    reducer,
    bindMiddleware([thunkMiddleware, sagaMiddleware, loggerMiddleware])
  );
  sagaMiddleware.run(rootSaga);
  return store;
};

export const wrapper = createWrapper(initStore);
