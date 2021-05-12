import { authenticate, logout, login, signUp } from "../services/auth";

const SET_USER = "session/SET_USER";
const REMOVE_USER = "session/REMOVE_USER";

const setUser = (user) => {
    return {
        type: SET_USER,
        user,
    }
}


const removeUser = () => ({
    type: REMOVE_USER
})

export const restoreUser = () => async dispatch => {
    const res = await authenticate();
    dispatch(setUser(res));
    return res;
}

export const loginUser = (email, password) => async (dispatch) => {
  const res = await login(email, password);

  dispatch(setUser(res));
  return res;
};

export const signUpUser = (username, email, password) => async dispatch => {
  const res = await signUp(username, email, password)
  
  dispatch(setUser(res))
};

export const logoutUser = () => async dispatch => {
    const res = await logout();

    dispatch(removeUser());

    return res;
}; 

const initialState = {
  user: null,
};
const sessionReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_USER:
      newState = Object.assign({}, state);
      if (action.user.errors) {
        newState.user = null;
      } else {
        newState.user = action.user;
      }
      return newState;
    case REMOVE_USER: 
      newState = Object.assign({}, state)
      newState.user = null;
      return newState;
    default:
      return state;
  }
};

export default sessionReducer;
