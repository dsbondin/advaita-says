const initialState = {
  user: {},
  token: null,
  isLoading: false,
  errors: {}
}

function authReducer(state = initialState, action) {
  switch (action.type) {
    case 'SEND_SIGN_UP_REQUEST':
      console.log(action)
      return {...state, isLoading: true}
    case 'SIGN_UP_USER':
      console.log(action)
      return {...state, user: action.JSON.user, token: action.JSON.token, isLoading: false, errors: action.JSON.errors};
    default:
      return state;
  }
};

export default authReducer;
