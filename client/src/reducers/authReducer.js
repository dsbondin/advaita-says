function authReducer(state = {
  user: {},
  token: null
}, action) {
  switch (action.type) {
    case 'SIGN_UP_USER':
      return {...state, user: action.user, token: action.token};
    default:
      return state;
  }
};

export default authReducer;
