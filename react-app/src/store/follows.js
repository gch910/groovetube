const ADD_FOLLOW = "follows/ADD_FOLLOW";
const GET_FOLLOWS = "follows/GET_FOLLOWS"


const addFollow = (follows) => {
  return {
    type: ADD_FOLLOW,
    follows,
  };
};

const getFollows = (followers) => {
  return {
    type: GET_FOLLOWS,
    followers,
  }
}

export const addUserFollow = (userId) => async (dispatch) => {
  const res = await fetch(`/api/users/me/following`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(
      {
        "person_to_follow_id": userId
      }
    )
  });
  console.log(res)
  const data = await res.json();
  console.log(data)

  return data;
};

// export const getUserFollows = (userId) => async (dispatch) => {
//   const res = await fetch(`/api/follow/followers/${userId}`)

//   const data = await res.json()
//   console.log("followers get", data)

//   dispatch(getFollows(data.followers))

//   return data;


// }

const initialState = {
  followers: [],
  following: [],
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
    case GET_FOLLOWS: {
      newState = {...state};
      const followers = action.followers;
      newState.followers = followers;
      return newState
    }
    default:
      return state;
  }
};

export default followsReducer;
