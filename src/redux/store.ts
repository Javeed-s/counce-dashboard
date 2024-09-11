import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import combineReducers from "./reducer/index";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["userReducer", "cartReducer"],
};

const persistedReducer = persistReducer(persistConfig, combineReducers);

const store = createStore(persistedReducer, applyMiddleware());

const persistor = persistStore(store);
export { store, persistor };