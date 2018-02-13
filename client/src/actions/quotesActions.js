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
      .then(response => response.json())
      .then(JSON => { dispatch({
        type: "FETCH_RANDOM_QUOTE",
        JSON: JSON}
      );
    });
  }
}

export function createNewQuote(quoteData, token) {
  return (dispatch) => {
    dispatch({type: "ADD_NEW_QUOTE_REQUEST"});
    return fetch("http://localhost:3001/quotes", {
      method: "post",
      body: JSON.stringify(quoteData),
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Token": token
      }
    })
    .then(response => response.json())
    .then(JSON => { dispatch({
      type: "ADD_NEW_QUOTE",
      JSON: JSON}
    )})
  }
}
