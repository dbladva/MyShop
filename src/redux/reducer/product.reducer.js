import * as ActionType from '../ActionType'

const initValue = ({
    isLoading: false,
    Product: [],
    Error: '',
})
export const GetProduct = (state = initValue, action) => {
    
    switch (action.type) {
        case ActionType.GET_PRODUCT:
            return {
                ...state,
                isLoading: false,
                Product: action.payload,
                Error: '',
            }
<<<<<<< Updated upstream
=======

            case ActionType.CART_ITEM:
                console.log('payloadddddddddddddddddddddddd',action.payload);
                return {
                    ...state,
                    isLoading: false,
                    // Product:  state.product.map((p) => p.id === action.payload.id ? action.payload : p),
                    Product:  action.payload,
                    Error: '',
                }

>>>>>>> Stashed changes
        default:
            return state
    }
}