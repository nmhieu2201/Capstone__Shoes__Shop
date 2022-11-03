import { createSlice } from "@reduxjs/toolkit";
import { http, ACCESSTOKEN, settings, USER_LOGIN } from "../../util/config";
import { history } from "../../index";
const initialState = {
  userLogin: settings.getStorageJson(USER_LOGIN)
    ? settings.getStorage(USER_LOGIN)
    : {},
  userProfile: {},
};

const userReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    loginAction: (state, action) => {
      let userLogin = action.payload;
      state.userLogin = userLogin;
    },
    getProfileAction: (state, action) => {
      console.log(action.payload);
      state.userProfile = action.payload;
    },
  },
});

export const { loginAction, getProfileAction } = userReducer.actions;

export default userReducer.reducer;
///async action
export const loginApi = (user) => {
  return async (dispatch) => {
    const result = await http.post("/api/users/signin", user);
    const action = loginAction(result.data.content);
    await dispatch(action);
    history.push("/proifle");
    const actionGetProfile = getProfileAction();
    dispatch(actionGetProfile);
    settings.setStorage(ACCESSTOKEN, result.data.content.ACCESSTOKEN);
    settings.setStorageJson(USER_LOGIN, result.data.content);
    settings.setCookie(ACCESSTOKEN, result.data.content.ACCESSTOKEN, 30);
  };
};
export const getProfileApi = () => {
  return async (dispatch) => {
    const result = await http.post("/api/users/profile");
    const action = getProfileAction(result.data.content);
    dispatch(action);
  };
};
export const loginFacebookApi = (tokenFBApp) => {
  return async (dispatch) => {
    const result = await http.post("/api/Users/facebooklogin", {
      facebookToken: tokenFBApp,
    });
    const action = await loginAction(result.data.content);
    dispatch(action);
    const actionGetProfile = getProfileAction(result.data.content);
    dispatch(actionGetProfile);
    settings.setStorageJson(USER_LOGIN, result.data.content);

    settings.setStorage(ACCESSTOKEN, result.data.content.accessToken);

    settings.setCookie(ACCESSTOKEN, result.data.content.accessToken, 30);
  };
};
