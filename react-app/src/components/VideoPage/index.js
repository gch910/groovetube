import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getVideo, addCollection, getUserVideos } from "../../store/videos";

import "./VideoPage.css";

const VideoPage = () => {
  const { videoId } = useParams();
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const video = useSelector((state) => state.videos.current_video);
  const userVideos = useSelector((state) => state.videos.user_videos);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const addVideo = async (e) => {
    e.preventDefault();
    await dispatch(addCollection(sessionUser?.id, videoId));
    setIsAdded(true);
  };

  let userVideosArray;
  userVideos ? (userVideosArray = Object.values(userVideos)): (userVideosArray = null);

  // if(userVideosArray) setIsAdded(userVideosArray.some(video => video.id == videoId))

  useEffect(() => {
    dispatch(getVideo(videoId))
    dispatch(getUserVideos(sessionUser?.id)).then(() => setIsLoaded(true));
  }, [dispatch, isAdded]);

  return (
    isLoaded && (
      <div id="outer-video-div">
        <h2 id="video-h2">{video?.title}</h2>
        <h3>Uploaded By: {video?.user.username}</h3>
        <div id="current-video-div">
          <iframe
            id="current-video"
            // width="640px"
            // height="360px"
            src={video?.video_path}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
        <div id="add-video-button-div">
          <button onClick={addVideo}>{userVideosArray?.some(video => video.id == videoId) ? "Added" : "Add Video"}</button>
        </div>
      </div>
    )
  );
};

export default VideoPage;
