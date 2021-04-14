import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { addUserFollow } from "../../store/follows";
import Button from "@material-ui/core/Button";
import "./UserFollowing.css";

const UserFollowing = ({
  user,
  displayCollection,
  displayFollowers,
  displayFollowing,
  followingClicked,
  setFollowingClicked,
  sessionUser,
}) => {
  const [isFollowing, setIsFollowing] = useState(null);
  const dispatch = useDispatch();

  const unfollow = (following) => {
    console.log(following);
    dispatch(addUserFollow(following.id)).then((res) => {
      console.log(res.result);
      if (res.result === "follow") {
        setIsFollowing(true);
      } else {
        setIsFollowing(false);
      }
    });
    setFollowingClicked(false);
    setTimeout(() => {
      setFollowingClicked(true);
    }, 1);
  };

  // useEffect(() => {

  // }, [dispatch, isFollowing])

  // !user?.following[0] ? sessionUser?.id === user.id ? (
  //   <h1 id="no-following-h1">You Aren't Following Anyone</h1>
  // ) : <h1 id="no-following-h1">No Follows</h1> : (
  const results = (
    <div id="user-following-div">
      {user.following.map((following) => (
        <>
          <div id="following-div">
            <NavLink to={`/users/${following.id}`} onClick={displayCollection}>
              <img src={following?.profile_img} className="following-img" />
            </NavLink>
            <NavLink
              id="following-text"
              to={`/users/${following.id}`}
              onClick={displayCollection}
            >
              {following.username}
            </NavLink>
            {sessionUser?.id === user?.id ? (
              <Button
                id="follow-button"
                variant="contained"
                onClick={() => unfollow(following)}
              >
                Unfollow
              </Button>
            ) : (
              ""
            )}
          </div>
        </>
      ))}
    </div>
  );
  // );

  // useEffect(() => {}, [user.following]);
  return results;
};

export default UserFollowing;
