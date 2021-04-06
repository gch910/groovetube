import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import UserVideos from "../UserVideos";
import UserUploads from "../UserUploads";
import "./User.css";

function User() {
  const [user, setUser] = useState({});
  const { userId } = useParams();
  const sessionUser = useSelector((state) => state.session.user);
  const [favoritesClicked, setfavoritesClicked] = useState(true);
  const [uploadedClicked, setUploadedClicked] = useState(false);

  const displaySongs = () => {
    setfavoritesClicked(true);
    setUploadedClicked(false);
  };
  const displayPopular = () => {
    setfavoritesClicked(false);
    setUploadedClicked(true);
  };

  useEffect(() => {
    if (!userId) {
      return;
    }
    (async () => {
      const response = await fetch(`/api/users/${userId}`);
      const user = await response.json();
      setUser(user);
    })();
  }, [userId]);

  if (!user) {
    return null;
  }

  return (
    <div>
      <h1 id="user-favorites-h1">
        {favoritesClicked
          ? sessionUser.id === user.id
            ? "Your Collection"
            : `${user.username}'s Collection`
          : ""}
      </h1>
      <h1 id="user-favorites-h1">
        {uploadedClicked
          ? sessionUser.id === user.id
            ? "Your Uploads"
            : `${user.username}'s Uploads`
          : ""}
      </h1>
      <ul id="user-info">
        <li>
          <strong>User Id</strong> {userId}
        </li>
        <li>
          <strong>Username</strong> {user.username}
        </li>
        <li>
          <strong>Email</strong> {user.email}
        </li>
      </ul>
      <nav id="profile-nav">
        <button
          className={`profile-nav-link no-outline ${
            favoritesClicked ? "active" : ""
          }`}
          onClick={displaySongs}
        >
          Collection
        </button>
        <button
          className={`profile-nav-link no-outline ${
            uploadedClicked ? "active" : ""
          }`}
          onClick={displayPopular}
        >
          Uploads
        </button>
      </nav>
      <div id="profile-display">
        <div id="profile-songs-div">
          {favoritesClicked ? <UserVideos userId={userId} /> : ""}
        </div>
        <div id="profile-popular-div">
          {uploadedClicked ? <UserUploads userId={userId} /> : ""}
        </div>
      </div>
    </div>
  );
}
export default User;
