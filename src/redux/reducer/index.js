import { combineReducers } from "redux";
import { GetProduct } from "./product.reducer";
import { signup_reducer } from "./Signup_reducer";

export const RootReducer = combineReducers({
    signup : signup_reducer,
    product: GetProduct,
})