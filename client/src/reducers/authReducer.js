function authReducer(state = [], action) {
  switch (action.type) {
    case 'SIGN_UP':
      return action.signup;
    default:
      return state;
  }
};

export default authReducer;
