import * as ActionType from '../ActionType'

const initValue = {
    isLoading: false,
    user: null,
    error: '',
    authMsg: '',
    confirm: null,
}

export const authReducer = (state = initValue, action) => {
    switch (action.type) {
        case ActionType.USER_EMAIL:
            return {
                ...state,
                isLoading: false,
                error: '',
                user: null,
                authMsg: alert(action.payload)
            }

        case ActionType.AUTH_ERROR:
            return {
                ...state,
                isLoading: false,
                error: alert(action.payload),
                user: null,
                authMsg: ''
            }
        case ActionType.LOADING_LOGIN:
            return {
                ...state,
                isLoading: true,
                error: '',
                user: null,
                authMsg: ''
            }
        case ActionType.SIGNIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: '',
                user: action.payload,
                authMsg: ''
            }
        case ActionType.SIGNOUT_USER:
            return {
                ...state,
                isLoading: false,
                error: '',
                user: null,
                // authMsg: alert(action.payload),
            }
        case ActionType.RESET_PASSWORD:
            return {
                ...state,
                isLoading: false,
                error: '',
                user: null,
                authMsg: alert(action.payload),
            }
            case ActionType.UID:
            return {
                ...state,
                isLoading: false,
                error: '',
                user: action.payload,
                authMsg: '',
            }
            case ActionType.OTP:
            return {
                ...state,
                isLoading: false,
                error: '',
                user: null,
                authMsg: '',
                confirm: action.payload
            }
            case ActionType.OTP_TIMEOUT:
                return {
                    ...state,
                    isLoading: false,
                    error: '',
                    user: null,
                    authMsg: alert(action.payload),
                    confirm: null
                }

                case ActionType.USER_PROFILE_PICTURE:
                    return {
                        ...state,
                        isLoading: false,
                        error: '',
                        // user: null,
                        authMsg: '',
                        userProfile: action.payload
                    }
        default:
            return state
    }
}