//we are not updating state here - we just need to add the follower on the backend because we are listening for changes of state in the user component, we have 2 useEffects, and we look for a change in the is_following key on user
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

  const data = await res.json();

  return data;
};

