import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams, Redirect } from "react-router-dom";
import UserVideos from "../UserVideos";
import UserUploads from "../UserUploads";
import UserFollowers from "../UserFollowers";
import "./User.css";

function User() {
  const [user, setUser] = useState({});
  const { userId } = useParams();
  const sessionUser = useSelector((state) => state.session.user);
  const [collectionClicked, setCollectionClicked] = useState(true);
  const [uploadedClicked, setUploadedClicked] = useState(false);
  const [followersClicked, setFollowersClicked] = useState(false);

  const gifKeyCreator = (path) => {
    const pathName = path.split("/")[2]
 
    const gifKey = pathName?.slice(0, pathName.indexOf("."))
    
    return gifKey
  }
  const imgKeyCreator = (path) => {
    const pathName = path.split("/")[2]
 
    const imgKey = pathName?.slice(0, pathName.indexOf("."))
    
    return imgKey
  }

  const displayCollection = () => {
    setFollowersClicked(false);
    setUploadedClicked(false);
    setCollectionClicked(true);
  };
  const displayUploads = () => {
    setCollectionClicked(false);
    setFollowersClicked(false);
    setUploadedClicked(true);
  };
  const displayFollowers = () => {
    setCollectionClicked(false);
    setUploadedClicked(false);
    setFollowersClicked(true);
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

  if (!userId) {
    return <Redirect to="/login"/>;
  }

  return (
    <div>
      <h1 id="user-favorites-h1">
        {collectionClicked
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
      <h1 id="user-favorites-h1">
        {followersClicked
          ? sessionUser.id === user.id
            ? "Your Followers"
            : `${user.username}'s Followers`
          : ""}
      </h1>
      <nav id="profile-nav">
        <button
          className={`profile-nav-link no-outline ${
            collectionClicked ? "active" : ""
          }`}
          onClick={displayCollection}
        >
          Collection
        </button>
        <button
          className={`profile-nav-link no-outline ${
            uploadedClicked ? "active" : ""
          }`}
          onClick={displayUploads}
        >
          Uploads
        </button>
        <button
          className={`profile-nav-link no-outline ${
            followersClicked ? "active" : ""
          }`}
          onClick={displayFollowers}
        >
          Followers
        </button>
      </nav>
      <div id="profile-display">
        <div id="profile-songs-div">
          {collectionClicked ? <UserVideos userId={userId} gifKeyCreator={gifKeyCreator} imgKeyCreator={imgKeyCreator} /> : ""}
        </div>
        <div id="profile-popular-div">
          {uploadedClicked ? <UserUploads userId={userId} sessionUser={sessionUser} user={user} gifKeyCreator={gifKeyCreator} imgKeyCreator={imgKeyCreator} /> : ""}
        </div>
        <div id="profile-followers-div">
          {followersClicked ? <UserFollowers userId={userId} displayCollection={displayCollection} user={user} /> : ""}
        </div>
      </div>
    </div>
  );
}
export default User;
