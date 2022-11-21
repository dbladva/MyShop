import * as ActionType from '../ActionType'

const initValue = {
    isLoading: false,
    error: '',
    status: null,
}


export const noInternetReducer = (state = initValue, action) => {
    switch (action.type) {
        case ActionType.INTERNET_CHECK:
            return {
                ...state,
                isLoading: false,
                error: '',
                status: action.payload,
            }
        default:
            return state
    }
}