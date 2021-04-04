import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getVideo, addCollection, getUserVideos } from "../../store/videos";
import CommentForm from "./CommentForm";
import "./VideoPage.css";

const VideoPage = () => {
  const { videoId } = useParams();
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const video = useSelector((state) => state.videos.current_video);
  const userVideos = useSelector((state) => state.videos.user_videos);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const [newComment, setNewComment] = useState(false);

  const addVideo = async (e) => {
    e.preventDefault();
    await dispatch(addCollection(sessionUser?.id, videoId));
    setIsAdded(true);
  };

  let userVideosArray;
  let userId;
  userVideos ? (userVideosArray = Object.values(userVideos)): (userVideosArray = null);

  // if(userVideosArray) setIsAdded(userVideosArray.some(video => video.id == videoId))

  useEffect(() => {
    dispatch(getVideo(videoId))
    dispatch(getUserVideos(sessionUser?.id)).then(() => setIsLoaded(true));

    return setNewComment(false);
  }, [dispatch, isAdded, newComment]);

  if (sessionUser.user) userId = sessionUser?.user?.id;

  return (
    isLoaded && (
      <div id="outer-video-div">
        <h3>Uploaded By: {video?.user.username}</h3>
        <h2 id="video-h2">{video?.title}</h2>
        <div id="current-video-div">
          <iframe
            id="current-video"
            width="100%"
            height="100%"
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
        <CommentForm
            userId={userId}
            newComment={newComment}
            setNewComment={setNewComment}
          />
      </div>
    )
  );
};

export default VideoPage;
