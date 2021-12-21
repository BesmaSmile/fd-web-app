import { LOGIN, REGISTER } from 'store/constants';

export function authReducer(state = {}, action) {
  switch (action.type) {
    case REGISTER:
      return {
        ...state,
        user: action.playload,
      };
    case LOGIN:
      return {
        ...state,
        user: action.playload,
      };
    default:
      return state;
  }
}
