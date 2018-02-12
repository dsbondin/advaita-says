export function signUpUser(userData) {
  return (dispatch) => {
    dispatch({type: "SEND_SIGN_UP_REQUEST"});
    return fetch("http://localhost:3001/users", {
      method: "post",
      body: JSON.stringify(userData),
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    }).then(response => response.json())
      .then(responseJSON => {
        dispatch({
        type: "SIGN_UP_USER",
        responseJSON: responseJSON}
      )}
    )
  }
}

// Finish this first thing in the morning!
// reducer will set state isLoading to true, on SEND_SIGN_UP_REQUEST, then update username and token upon success
