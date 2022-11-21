import { type } from 'os'
import * as ActionType from '../ActionType'


export const noInternetAction = (status) => (dispatch) => {
    console.log('====================================');
    console.log("statussssssssssssssss",status);
    console.log('====================================');
    dispatch({ type: ActionType.INTERNET_CHECK, payload: status })
}