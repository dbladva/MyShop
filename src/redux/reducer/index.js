import { combineReducers } from "redux";
import { cartItem } from "./cart.reducer";
import { getCartItem } from "./Getcart.reducer";
import { LoginWithFirebase } from "./Auth.reducer";
import { GetProduct } from "./product.reducer";
import { signup_reducer } from "./Signup_reducer";

export const RootReducer = combineReducers({
    signup : signup_reducer,
    product: GetProduct,
    cart : cartItem,
    cartitem: getCartItem,
    firebaseLogin: LoginWithFirebase,
})