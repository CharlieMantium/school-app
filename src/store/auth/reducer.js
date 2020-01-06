import { LOGIN, LOGOUT } from './actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        uid: action.uid,
      };
    case LOGOUT:
      return {
        ...state,
        uid: '',
      };
    default:
      return state;
  }
};
