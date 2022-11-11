import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
import { createLogger } from "redux-logger";

const sagaMiddleware = createSagaMiddleware();
import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import reducer from "./reducers";
import { createWrapper } from "next-redux-wrapper";

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  const enhancer = compose(applyMiddleware(...middleware));
  return enhancer;
};

const initStore = () => {
  const middleWares = [thunkMiddleware, sagaMiddleware];

  if (process.env.NODE_ENV === "development") {
    const loggerMiddleware = createLogger();
    middleWares.push(loggerMiddleware);
  }
  const store = createStore(
    reducer,
    bindMiddleware(middleWares)
  );
  sagaMiddleware.run(rootSaga);
  return store;
};

export const wrapper = createWrapper(initStore);

