import * as ActionType from '../ActionType'

const initValue = ({
    isLoading: false,
    cartItem : [],
    Error: ''

})

export const getCartItem = (state = initValue, action) => {
switch (action.type) {
    case ActionType.GET_CART_ITEM:
        return{
            ...state,
            isLoading: false,
            cartItem: action.payload,
            Error: ''
        }

        case ActionType.DELETE_CART_ITEM:
            return {
                ...state,
                cartItem: state.cartItem.filter((p) => p.id !== action.payload),
                // cartItem: action.payload,
                isLoading: false,
                error: ''
            }
        
    default:
        return state;
}
}