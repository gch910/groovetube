import React from "react";
import { NavLink } from "react-router-dom";
import "./UserFollowers.css";

const UserFollowers = ({ user, displayCollection }) => {

  const results = (
    <div id="user-followers-div">
      {console.log(user)}
      {user.followers.map((follower) => (
        <div id="follower-div">
          <NavLink to={`/users/${follower.id}`} onClick={displayCollection}>
            <img src={follower?.profile_img} className="follower-img" />
          </NavLink>
          <NavLink
            id="follower-text"
            to={`/users/${follower.id}`}
            onClick={displayCollection}
          >
            {follower.username}
          </NavLink>
        </div>
      ))}
    </div>
  );

  return results;
};

export default UserFollowers;
