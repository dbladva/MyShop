import * as ActionType from '../ActionType'

const InitVal = ({
    isLoading: false,
    signup: '',
    Error: '',
})

export const LoginWithFirebase = (state=InitVal, action) => {
switch (action.type) {
    case ActionType.SUCCESSFULLY_SIGNUP:
        return{
            ...state,
            isLoading: false,
            signup: alert('Succesfully Signuped'),
            Error: ''
        }

        case ActionType.ERROR_SIGNUP:
            return{
                ...state,
                isLoading: false,
                signup: '',
                Error: alert(action.payload)
            }

            case ActionType.LOADING_LOGIN:
            return {
                ...state,
                isLoading: true,
                Error: ''
            }

    default:
        return state;
}
}