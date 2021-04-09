import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./UserFollowers.css";

const UserFollowers = ({ user, displayCollection }) => {
  return (
    <div id="user-followers-div">
      {console.log(user)}
      {user.followers.map((follower) => (
        <div id="follower-div">
          <NavLink to={`/users/${follower.id}`} onClick={displayCollection}>
            <img src={follower?.profile_img} className="follower-img" />
          </NavLink>
          <NavLink to={`/users/${follower.id}`} onClick={displayCollection}>{follower.username}</NavLink>
        </div>
      ))}
    </div>
  );
};

export default UserFollowers;
