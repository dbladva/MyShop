import AsyncStorage from "@react-native-community/async-storage";
import { applyMiddleware, createStore } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import thunk from "redux-thunk";
import { RootReducer } from "./reducer";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "../saga/rootSaga";

// export const store = createStore(RootReducer,applyMiddleware(thunk))

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ["auth"]
}
const persistedReducer = persistReducer(persistConfig, RootReducer)

const saga = createSagaMiddleware()
const middlewares = [saga, thunk]

export const configStore = () => {
  const Store = createStore(persistedReducer, applyMiddleware(...middlewares))
  let persistor = persistStore(Store)
  saga.run(rootSaga)
  return { Store, persistor }
}           