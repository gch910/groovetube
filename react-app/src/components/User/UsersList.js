import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import profPic from "../Home/profile-pics/index.js"

console.log(profPic["file"])

function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/users/");
      const responseData = await response.json();
      setUsers(responseData.users);
    }
    fetchData();
  }, []);

  const userComponents = users?.map((user) => {
    return (
      <div id="user-list-name" key={user.id}>
        <img src={user?.id == 2 ? profPic["file"] : user?.profile_img} className="user-profile-img" />
        <NavLink to={`/users/${user.id}`}>{user.username}</NavLink>
      </div>
    );
  });

  return (
    <div id="user-list-div">
      <h1 id="user-list-h1">Explore Users:</h1>
      <ul>{userComponents}</ul>
    </div>
  );
}

export default UsersList;
