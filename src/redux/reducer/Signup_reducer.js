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
    default:
        return state
}
}