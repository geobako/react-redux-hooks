import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducer";
import loggerMiddleware from "redux-logger";

const store = createStore(rootReducer, applyMiddleware(loggerMiddleware));

export default store;
