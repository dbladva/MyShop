import * as ActionType from '../ActionType'

let initValue = {
    isLoading: false,
    signup: null,
    Error: ''
}

export const signup_reducer = (state=initValue, action)=> {
switch (action.type) {
    case ActionType.SIGN_UP:
        return{
            ...state,
            signup: action.payload,
            Error: ''
        }
         case ActionType.SIGN_IN:
        return{
            ...state,
            product: action.payload,
            isLoading: false,
            error: ''
        }
    default:
        return state
}
}