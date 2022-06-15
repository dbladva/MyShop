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
        default:
            return state
    }
}