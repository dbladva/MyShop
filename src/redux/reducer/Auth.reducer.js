import Snackbar from 'react-native-snackbar'
import * as ActionType from '../ActionType'

const initValue = {
    isLoading: false,
    user: null,
    isLoggedIn: false,
    error: '',
    authMsg: '',
    confirm: null,
    userProfile: '',
    userName: ''
}

export const authReducer = (state = initValue, action) => {

    const errorShow = (errorMsg) => {
        return (
            Snackbar.show({
                text: errorMsg,
                duration: 5000,
                action: {
                    text: 'Retry',
                    textColor: 'white',
                    onPress: () => { /* Do something. */
                        console.log("Pressed")
                    },
                },
            })
        )
    }

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
                error: errorShow(action.payload),
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
                isLoggedIn: true,
                user: action.payload,
                authMsg: ''
            }
        case ActionType.SIGNOUT_USER:
            return {
                ...state,
                isLoading: false,
                error: '',
                user: null,
                isLoggedIn: false
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
        case ActionType.USER_PROFILE_NAME:
            return {
                ...state,
                isLoading: false,
                error: '',
                // user: null,
                authMsg: '',
                userName: action.payload
            }
        default:
            return state
    }
}