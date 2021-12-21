import { LOGIN, REGISTER } from 'store/constants';
import { authService } from 'services';

export function register(dispatch) {
  return (user) => authService.register(user).then((result) => {
    dispatch({ type: REGISTER, playload: result.data });
  });
}

export function login(dispatch) {
  return (params) => authService.login(params).then((result) => {
    dispatch({ type: LOGIN, playload: result.data });
  });
}
