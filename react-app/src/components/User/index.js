import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { getUserVideos, getUploadedVideos } from "../../store/videos";
import UserFavorites from "./UserFavorites";
import UserUploaded from "./UserUploaded"
import "./User.css";

function User() {
  const [user, setUser] = useState({});
  const { userId } = useParams();
  const dispatch = useDispatch();
  const userVideos = useSelector((state) => state.videos.user_videos);
  const uploadedVideos = useSelector(state => state.videos.uploaded_videos)
  const sessionUser = useSelector((state) => state.session.user);
  const [favoritesClicked, setfavoritesClicked] = useState(true);
  const [uploadedClicked, setUploadedClicked] = useState(false);

  const changeImg = (e) => {
    e.target.src = e.target.id;
  };

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
    dispatch(getUserVideos(userId));
    dispatch(getUploadedVideos(userId));
  }, [userId]);

  if (!user) {
    return null;
  }

  let userVideosArray;
  let userUploadedArray;
  userVideos
    ? (userVideosArray = Object.values(userVideos))
    : (userVideosArray = null);
  
  uploadedVideos
    ? (userUploadedArray = Object.values(uploadedVideos))
    : (userUploadedArray = null);

  

  return (
    <div>
      <h1 id="user-favorites-h1">{favoritesClicked ? sessionUser.id === user.id ? "Your Collection" : `${user.username}'s Collection` : ""}</h1>
      <h1 id="user-favorites-h1">{uploadedClicked ? sessionUser.id === user.id ? "Your Uploads" : `${user.username}'s Uploads` : ""}</h1>
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
        <button className={`profile-nav-link no-outline ${favoritesClicked ? "active" : ""}`} onClick={displaySongs}>
          Collection
        </button>
        <button
          className={`profile-nav-link no-outline ${uploadedClicked ? "active" : ""}`}
          onClick={displayPopular}
        >
          Uploads
        </button>
      </nav>
      <div id="profile-display">
        <div id="profile-songs-div">{favoritesClicked ? <UserFavorites userVideosArray={userVideosArray} changeImg={changeImg} /> : ""}</div>
        <div id="profile-popular-div">
          {uploadedClicked ? <UserUploaded userUploadedArray={userUploadedArray} changeImg={changeImg}/> : ""}
        </div>
      </div>
      
    </div>
  );
}
export default User;
