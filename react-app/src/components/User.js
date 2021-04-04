import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { getUserVideos } from "../store/videos";
import "./User.css"

function User() {
  const [user, setUser] = useState({});
  const { userId } = useParams();
  const dispatch = useDispatch();
  const userVideos = useSelector((state) => state.videos.user_videos);

  const changeImg = (e) => {
    e.target.src = e.target.id;
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
      <div id="home-grid">
        {userVideosArray?.map((video) => (
          <div id="thumbnail-div">
            <Link to={`/videos/${video.id}`}>
              <img
                onMouseEnter={changeImg}
                onMouseLeave={(e) => (e.target.src = video.img_path + ".jpg")}
                id={video?.gif_path}
                className="thumbnail"
                src={`${video.img_path}.jpg`}
              />
            </Link>
            <Link id="thumbnail-h3-link" to={`/videos/${video.id}`}>
              <div id="thumbnail-h3-div">
                <h3>{video.title}</h3>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
export default User;
