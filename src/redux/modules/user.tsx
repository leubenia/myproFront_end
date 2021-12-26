import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import apis  from "../../shared/axios";

const SIGN_UP = "SIGN_UP";
const SET_USER = "LOG_IN";
const LOG_OUT = "LOG_OUT";
const SET_ERROR = "SET_ERROR";

const signUp = createAction(SIGN_UP);
const setUser = createAction(SET_USER, (user:유저_인터페이스) => ({ user }));
const logOut = createAction(LOG_OUT);
const setError = createAction(SET_ERROR, (error:Error) => ({ error }));

const initialState:{user: 유저_인터페이스|null, isLoggedIn:boolean, error:string[] } = {
  user: null,
  isLoggedIn: false,
  error: [],
};

interface 유저_인터페이스 {
    email: string;
    nickname: string;
    password: string;
  }
  

export const signUpAPI = (_account:유저_인터페이스) => {
};

export const logInAPI = (account:유저_인터페이스) => {
  
};

export const logOutAPI = () => {
};

export const getUserAPI = () => {
};

export default handleActions(
  {
    [SIGN_UP]: (state, action) =>
      produce(state, (draft) => {
        console.log(action);
      }),
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        draft.user = action.payload.user;
        draft.isLoggedIn = true;
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        draft.user = null;
        draft.isLoggedIn = false;
      }),
  },
  initialState,
);

const userActions = {
  signUpAPI,
  logInAPI,
  logOutAPI,
  getUserAPI,
};

export { userActions };