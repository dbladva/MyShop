import { combineReducers } from "redux";
import { signin_Reducer } from "./signin.reducer";
import { signup_reducer } from "./Signup_reducer";

export const RootReducer = combineReducers({
    signup : signup_reducer,
})