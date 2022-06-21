
import AsyncStorage from "@react-native-community/async-storage";
import { applyMiddleware, createStore } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import thunk from "redux-thunk";
import { RootReducer } from "./reducer";

// export const store = createStore(RootReducer,applyMiddleware(thunk))

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: []
  }
   
  const persistedReducer = persistReducer(persistConfig, RootReducer)

  export const configStore = () => {
    const Store = createStore(persistedReducer,applyMiddleware(thunk))
    let persistor = persistStore(Store)
    return { Store, persistor }
  }