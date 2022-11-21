import { combineReducers } from "redux";
import { authReducer } from "./Auth.reducer";
import { cartItem } from "./cart.reducer";
import { getCartItem } from "./Getcart.reducer";
import { location } from "./location.reducer";
import { noInternetReducer } from "./no_Internet.reducer";
import { GetProduct } from "./product.reducer";
import { signup_reducer } from "./Signup_reducer";

export const RootReducer = combineReducers({
    signup: signup_reducer,
    product: GetProduct,
    cart: cartItem,
    cartitem: getCartItem,
    auth: authReducer,
    internet: noInternetReducer,
    location: location,
})