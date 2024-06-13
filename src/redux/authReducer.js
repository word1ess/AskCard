import { authApi } from "../api/api";

const SET_USER_INFO = "SET_USER_INFO";
const REGISTER_USER = "REGISTER_USER";
let initalState = {
  email: "",
  login: "",
  id: null,
  isAuth: false,
};

export const setUserLoginData = (body) => ({
  type: SET_USER_INFO,
  body,
});
export const registationUser = (body) => ({
  type: REGISTER_USER,
  body,
});

const authReducer = (state = initalState, action) => {
  switch (action.type) {
    case SET_USER_INFO:
      return {
        ...state,
        ...action.body,
        isAuth: true,
      };
    case REGISTER_USER:
      return {
        ...state,
        ...action.body,
        isAuth: true,
      };
    default:
      return state;
  }
};

export const isUserAuthorized = () => {
  return (dispatch) =>
    authApi.isUserAuthorized().then((repsonse) => {
      repsonse.resultCode === 0 && dispatch(setUserLoginData(repsonse.data));
    });
};
export const userRegistarionAC = () => {
  return (dispatch) =>
    authApi.userRegistarion().then((repsonse) => {
      repsonse.resultCode === 0 && dispatch(registationUser(repsonse.data));
    });
};

export default authReducer;
