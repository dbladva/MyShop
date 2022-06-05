import { combineReducers } from "redux";
import { addressReducer } from "./Address.reducers";
import { signup_reducer } from "./Signup_reducer";

export const RootReducer = combineReducers({
    signup : signup_reducer,
    address: addressReducer,
})