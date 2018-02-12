export function signUpUser(userData) {
  console.log(userData)
  return (dispatch) => {
    return fetch("http://localhost:3001/users", {
      method: "post",
      body: JSON.stringify(userData),
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    })
  }
}
