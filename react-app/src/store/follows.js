const ADD_FOLLOW = "follows/ADD_FOLLOW";

const addFollow = (follows) => {
  return {
    type: ADD_FOLLOW,
    follows,
  };
};

export const addUserFollow = (sessionUserId, userId) => async (dispatch) => {
  const res = await fetch(`/api/follow/${sessionUserId}/${userId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(res)
  const data = await res.json();
  console.log(data)

  dispatch(addFollow(data));

  return data;
};

const initialState = {
  fallowers: [],
  fallowing: [],
};

const followsReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case ADD_FOLLOW: {
      newState = { ...state };
      const follows = action.follows;
      newState.followers = follows.followers;
      newState.following = follows.following;
      return newState;
    }
    default:
      return state;
  }
};

export default followsReducer;
