import * as ActionType from '../ActionType'

export const LoggedIn = () => (dispatch) => {
    console.log('Logged in');
    dispatch({type: ActionType.LOGGED_IN,payload: true});
}
export const LoggedOut = () => (dispatch) => {
    dispatch({type: ActionType.LOGGED_OUT});
}