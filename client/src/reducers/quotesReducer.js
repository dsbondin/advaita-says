const initialState = {
  list: [],
  randomQuote: null,
  isLoading: false,
  errors: {}
}

export function quotesReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_QUOTES_REQUEST':
      return {...state, isLoading: true}
    case 'FETCH_QUOTES':
      return {...state, list: action.JSON, isLoading: false}
    case 'FETCH_RANDOM_QUOTE':
      return {...state, randomQuote: action.JSON, isloading: false}
    default:
      return state;
  }
};
