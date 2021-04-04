import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { getUserVideos } from "../../store/videos";
import UserFavorites from "./UserFavorites";
import "./User.css";

function User() {
  const [user, setUser] = useState({});
  const { userId } = useParams();
  const dispatch = useDispatch();
  const userVideos = useSelector((state) => state.videos.user_videos);
  const uploadedVideos = useSelector(state => state.user)
  const [songsClicked, setSongsClicked] = useState(true);
  const [popularClicked, setPopularClicked] = useState(false);

  const changeImg = (e) => {
    e.target.src = e.target.id;
  };

  const displaySongs = () => {
    setSongsClicked(true);
    setPopularClicked(false);
  };
  const displayPopular = () => {
    setSongsClicked(false);
    setPopularClicked(true);
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
  }, [userId]);

  if (!user) {
    return null;
  }

  let userVideosArray;
  userVideos
    ? (userVideosArray = Object.values(userVideos))
    : (userVideosArray = null);

  return (
    <div>
      <h1 id="user-favorites-h1">{user.username}'s Favorite videos</h1>
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
        <button className="profile-nav-link no-outline" onClick={displaySongs}>
          Songs
        </button>
        <button
          className="profile-nav-link no-outline"
          onClick={displayPopular}
        >
          Popular
        </button>
      </nav>
      <div id="profile-display">
        <div id="profile-songs-div">{songsClicked ? <UserFavorites userVideosArray={userVideosArray} changeImg={changeImg} /> : ""}</div>
        <div id="profile-popular-div">
          {popularClicked ? <h1>Popular</h1> : ""}
        </div>
      </div>
      
    </div>
  );
}
export default User;
