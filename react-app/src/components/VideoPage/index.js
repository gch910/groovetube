import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import {
  getVideo,
  addCollection,
  getUserVideos,
} from "../../store/videos";
import { addUserFollow } from "../../store/follows";
import CommentForm from "./CommentForm";
import ButtonDiv from "./ButtonDiv";
import Comments from "./Comments";
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
  const [deleteShown, setDeleteShown] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const [hoverIndex, setHoverIndex] = useState(null);
  const [isFollowing, setIsFollowing] = useState(false);

  const addVideo = (e) => {
    e.preventDefault();
    dispatch(addCollection(sessionUser?.id, videoId));
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 100);
  };

  const addFollow = () => {
    dispatch(addUserFollow(video.user.id)).then((res) => {
      console.log(res.result);
      if (res.result === "follow") {
        setIsFollowing(true);
      } else {
        setIsFollowing(false);
      }
    });
  };

  let userId;

  useEffect(() => {
    dispatch(getVideo(videoId)).then(() => setIsLoaded(true));
    dispatch(getUserVideos(sessionUser?.id)).then(() => setIsLoaded(true));
  }, [dispatch, isAdded, newComment, deleted, videoId]);

  useEffect(() => {
    video && setIsFollowing(video?.user?.is_following);
  }, [video?.user?.is_following]);

  if (sessionUser?.user) userId = sessionUser?.user?.id;

  return (
    isLoaded && (
      <div id="outer-video-div">
        <Link to={`/users/${video?.user?.id}`}>
          <h2 id="uploaded-by">Uploaded By: {video?.user?.username}</h2>
        </Link>
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
        {video && sessionUser && (
          <ButtonDiv
            video={video}
            addFollow={addFollow}
            userVideos={userVideos}
            addVideo={addVideo}
            sessionUser={sessionUser}
            isFollowing={isFollowing}
          />
        )}
        <CommentForm
          userId={userId}
          newComment={newComment}
          setNewComment={setNewComment}
        />
        <Comments
          video={video}
          sessionUser={sessionUser}
          setDeleted={setDeleted}
        />
      </div>
    )
  );
};

export default VideoPage;
