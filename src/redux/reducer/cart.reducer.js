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
    
        default: return state
    }
}