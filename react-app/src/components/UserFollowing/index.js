import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./UserFollowing.css";

const UserFollowing = ({ user, displayCollection }) => {
  return (
    <div id="user-following-div">
      {console.log(user)}
      {user.following.map((following) => (
        <div id="following-div">
          <NavLink to={`/users/${following.id}`} onClick={displayCollection}>
            <img src={following?.profile_img} className="following-img" />
          </NavLink>
          <NavLink id="following-text" to={`/users/${following.id}`} onClick={displayCollection}>{following.username}</NavLink>
        </div>
      ))}
    </div>
  );
};

export default UserFollowing;