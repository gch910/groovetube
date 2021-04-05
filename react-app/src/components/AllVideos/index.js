import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllVideos } from "../../store/videos";
import { Link } from "react-router-dom";
import "./AllVideos.css";

const AllVideos = () => {
  const dispatch = useDispatch();
  const videos = useSelector((state) => state.videos.all_videos);
  const sessionUser = useSelector((state) => state.session.user);
  const [isLoaded, setIsLoaded] = useState(false);

  const changeImg = (e) => {
    e.target.src = e.target.id;
  };

  useEffect(() => {
    dispatch(getAllVideos()).then(() => setIsLoaded(true));
  }, [dispatch]);

  // let allVideos;

  // videos ? (allVideos = Object.values(videos)) : (allVideos = null);

  return (
    isLoaded && (
      <div>
        <h1 id="all-videos-h1">All Videos</h1>
        <div id="home-grid">
          {videos.map((video) => (
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
    )
  );
};

export default AllVideos;
