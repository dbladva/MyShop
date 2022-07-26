import * as ActionType from '../ActionType'

const initValue = ({
    isLoading: false,
    cart: [],
    Error: ''
})

export const cartItem = (state = initValue,action) => {
    switch (action.type) {
            case ActionType.CART_ITEM:
                return {
                    ...state,
                    isLoading: false,
                    cart: action.payload,
                    Error: '',
                }
                case ActionType.DELETE_CART_ITEM:
                return {
                    ...state,
                    isLoading: false,
                    cart: state.cart.filter((p) => p.id !== action.payload),
                    Error: '',
                }

                case ActionType.LOADING_CART:
                return {
                    ...state,
                    isLoading: true,
                    cart: [],
                    Error: '',
                }

                case ActionType.CART_ITEM:
                    return {
                        ...state,
                        isLoading: false,
                        cart: null,
                        Error: '',
                    }

    
        default: 
        return state
    }
}