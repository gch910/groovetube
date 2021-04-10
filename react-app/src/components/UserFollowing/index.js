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
    dispatch(addUserFollow(following.id))
      .then((res) => {
        console.log(res.result);
        if (res.result === "follow") {
          setIsFollowing(true);
        } else {
          setIsFollowing(false);
        }
      })
      setFollowingClicked(false)
      setTimeout(()=> {
        setFollowingClicked(true)
      }, 1)
  };

  // useEffect(() => {}, [user.following]);

  return (
    <div id="user-following-div">
      {user.following.map((following) => (
        <>
          {following.id !== sessionUser.id && (
            <div id="following-div">
              <NavLink
                to={`/users/${following.id}`}
                onClick={displayCollection}
              >
                <img src={following?.profile_img} className="following-img" />
              </NavLink>
              <NavLink
                id="following-text"
                to={`/users/${following.id}`}
                onClick={displayCollection}
              >
                {following.username}
              </NavLink>
              <Button
                id="follow-button"
                variant="contained"
                onClick={() => unfollow(following)}
              >
                Unfollow
              </Button>
            </div>
          )}
        </>
      ))}
    </div>
  );
};

export default UserFollowing;
