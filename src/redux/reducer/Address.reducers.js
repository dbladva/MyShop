import * as ActionType from '../ActionType';

const initValue = {
  isLoading: false,
  address: '',
  Error: '',
};
export const addressReducer = (state=initValue,action) => {
  switch (action.type) {
    case ActionType.ADDRESS:
      return {
        ...state,
        address: action.payload,
        Error: '',
      };

      case ActionType.SHOW_ADDRESS:
      return {
        ...state,
        isLoading: false,
        address: action.payload,
        Error: '',
      };

    default:
      return state; 
  }
};
