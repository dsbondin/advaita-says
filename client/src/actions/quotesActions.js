export function fetchMyQuotes() {
  return (dispatch) => {
    dispatch({type: "FETCH_QUOTES_REQUEST"});
    return fetch("http://localhost:3001/quotes")
      .then(response => response.json())
      .then(JSON => { dispatch({
        type: "FETCH_QUOTES",
        JSON: JSON}
      );
    });
  }
}

export function fetchRandomQuote() {
  return (dispatch) => {
    dispatch({type: "FETCH_QUOTES_REQUEST"});
    return fetch("http://localhost:3001/quotes/random")
  }
}
