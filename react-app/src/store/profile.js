const SET_USER = "profile/SET_USER";
const UNLOAD_USER = "profile/UNLOAD_USER"

const setUser = (user) => {
    return {
        type: SET_USER,
        user,
    }
}
export const unloadUser = () => {
    return {
        type: UNLOAD_USER,
    }
}

export const setProfileUser = (userId) => async dispatch => {
    const res = await fetch(`/api/users/${userId}`);
    
    const user = await res.json()

    dispatch(setUser(user))
} 


const initialState = {
    user: null,
  };

const profileReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
      case SET_USER:
        newState = {...state}
        newState.user = action.user
        return newState;
      case UNLOAD_USER:
        state.user = null;
        return state;
    
      default:
        return state;
    }
  };
  
  export default profileReducer;
  