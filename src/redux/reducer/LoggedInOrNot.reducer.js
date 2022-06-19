import * as ActionType from '../ActionType'

const initValue = ({
    loggedIn: false
})
export const LoggedinOrNot = (state = initValue, action) => {
// console.log('aaaaaaaaaaaaaaaaaa', action.payload);   
    switch (action.type) {
        case ActionType.LOGGED_IN:
            return {
                ...state,
                loggedIn: action.payload
            }
        case ActionType.LOGGED_OUT:
            return {
                ...state,
                loggedIn: false
            }
        default:
            return state;
    }
}