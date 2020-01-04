import { login, logout } from './actions';
import { LOGIN, LOGOUT } from './actionTypes';

describe('auth actions', () => {
  it('should generate login action abject', () => {
    const uid = 'testUID123456';
    const action = login(uid);
    expect(action).toEqual({
      type: LOGIN,
      uid,
    });
  });
  it('should generate logout action abject', () => {
    const action = logout();
    expect(action).toEqual({
      type: LOGOUT,
    });
  });
});
