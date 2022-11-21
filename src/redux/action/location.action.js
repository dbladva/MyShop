import * as ActionType from '../ActionType'

export const getCurrenLocation = (data) => async (dispatch) => {
dispatch({type: ActionType.CURRENT_LOCATION , payload: data})
}



