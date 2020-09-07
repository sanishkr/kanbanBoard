import { createStore, applyMiddleware } from "redux";
import reduxLogger from "redux-logger";
import rootReducer from "./reducers";

const middlewares = [reduxLogger];
const initStore = createStore(rootReducer, applyMiddleware(...middlewares));

export default initStore;
