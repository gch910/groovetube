import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import FollowButton from "../FollowButton";
import { addUserFollow } from "../../store/follows";
import Button from '@material-ui/core/Button';
import "./UserFollowing.css";

const UserFollowing = ({ user, displayCollection, displayFollowers, displayFollowing, followingClicked, setFollowingClicked }) => {
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
    }).then(displayFollowers())
    setTimeout(()=> {
      displayFollowing()
    }, 1)
      
  };

  useEffect(() => {}, []);

  return (
    <div id="user-following-div">
      {console.log(user)}
      {user.following.map((following) => (
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
          <Button
            id="follow-button"
            variant="contained"
            onClick={() => unfollow(following)}
          >
            Unfollow
          </Button>
        </div>
      ))}
    </div>
  );
};

export default UserFollowing;
