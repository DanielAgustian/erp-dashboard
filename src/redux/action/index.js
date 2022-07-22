export const loginAction = (data) => {
    // console.log(data)
    localStorage.setItem("data", JSON.stringify(data));
    return {
        type: "LOGIN_SUCCESS",
        payload: data
    }
}
