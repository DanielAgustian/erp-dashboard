const INITIAL_STATE = {
  name: "",
  token: "",
  login: false,
  error: false,
  avatar: null,
};
const Auth = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        ...action.payload,
        login: true,
      };

    case "LOGOUT":
      return INITIAL_STATE;
    default:
      return state;
  }
};
