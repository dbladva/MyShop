import * as ActionType from '../ActionType'

const initValue = ({
    isLoading: false,
    location: {},
    Error: ''
})

export const location = (state = initValue, action) => {
    switch (action.type) {
        case ActionType.CURRENT_LOCATION:
            return {
                ...state,
                isLoading: false,
                location: action.payload,
                Error: '',
            }

        default:
            return state
    }
}