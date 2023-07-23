import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./Reducer";

import thunkMiddleware from "redux-thunk";

const composeEhnacer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEhnacer(applyMiddleware(thunkMiddleware))
);

export default store;
