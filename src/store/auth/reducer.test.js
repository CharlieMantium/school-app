import authReducer from './reducer';
import { LOGIN, LOGOUT } from './actionTypes';

describe('authReducer', () => {
  it('should set uid for login', () => {
    const uid = 'testUID123456';
    const action = {
      type: LOGIN,
      uid,
    };
    const state = authReducer({}, action);
    expect(state.uid).toBe(uid);
  });
  it('should clear uid for logout', () => {
    const uid = 'testUID123456';
    const action = {
      type: LOGOUT,
    };
    const state = authReducer({ uid }, action);
    expect(state).toEqual({ uid: '' });
  });
});
