import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducer";

const middleware = [thunk];

const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;