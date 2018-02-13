export function logoutAction() {
  return dispatch => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    dispatch({type: 'LOG_OUT_USER'});
  }
}
