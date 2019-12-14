import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
//Libraries

import rootReducer from "./root-reducer";

const middlewares = [];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

export default { store, persistor };

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}