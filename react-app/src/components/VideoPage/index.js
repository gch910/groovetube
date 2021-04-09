import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getVideo,
  addCollection,
  getUserVideos,
  deleteUserComment,
} from "../../store/videos";
import { addUserFollow, getUserFollows } from "../../store/follows";
import CommentForm from "./CommentForm";
import ButtonDiv from "./ButtonDiv";
import "./VideoPage.css";


const VideoPage = () => {
  const { videoId } = useParams();
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const video = useSelector((state) => state.videos.current_video);
  const userVideos = useSelector((state) => state.videos.user_videos);
  const userFollows = useSelector((state) => state.follows);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  // const [isFollowed, setIsFollowed] = useState(false);
  const [newComment, setNewComment] = useState(false);
  const [deleteShown, setDeleteShown] = useState(false);
  const [deleted, setDeleted] = useState(false);

  const addVideo = async (e) => {
    e.preventDefault();
    await dispatch(addCollection(sessionUser?.id, videoId));
    setIsAdded(true);
  };

  const addFollow = (setIsFollowing) => {
    dispatch(addUserFollow(video.user.id)).then((res) => {
      console.log(res.result);
      if (res.result === "follow") {
        setIsFollowing(true);
      } else {
        setIsFollowing(false);
      }
    });
  };

  console.log("video user", video?.user.id);

  const deleteComment = (e) => {
    console.log();
    if (sessionUser?.id == e.target.className.split(" ")[1]) {
      dispatch(deleteUserComment(e.target.id));
      setDeleted(true);
      setTimeout(() => {
        setDeleted(false);
      }, 100);
    }
  };

  let userVideosArray;
  let userId;
  userVideos
    ? (userVideosArray = Object.values(userVideos))
    : (userVideosArray = null);

  // if(userVideosArray) setIsAdded(userVideosArray.some(video => video.id == videoId))

  useEffect(() => {
    dispatch(getVideo(videoId)).then(setIsLoaded(true));
    dispatch(getUserVideos(sessionUser?.id)).then(() => setIsLoaded(true));

    return setNewComment(false);
  }, [dispatch, isAdded, newComment, deleted]);

  useEffect(() => {
    video &&
      dispatch(getUserFollows(video.user.id)).then(() => setIsLoaded(true));
  }, [dispatch, video]);

  if (sessionUser?.user) userId = sessionUser?.user?.id;

  return (
    isLoaded && (
      <div id="outer-video-div">
        <h3 id="uploaded-by">Uploaded By: {video?.user.username}</h3>
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
          />
        )}
        {/* <div id="add-video-button-div">
          <button onClick={addVideo}>
            {userVideosArray?.some((video) => video.id == videoId)
              ? "Added"
              : "Add Video"}
          </button>
          <button id="follow-button" onClick={addFollow}>
              {video.user.is_following
              ? "Following"
              : `Follow ${video?.user.username}`
            }
          </button>
        </div> */}
        <CommentForm
          userId={userId}
          newComment={newComment}
          setNewComment={setNewComment}
        />
        <div id="comments-div">
          {video?.comments.map((comment) => (
            <div
              className="comment-div"
              onMouseEnter={() => setDeleteShown(true)}
              onMouseLeave={() => setDeleteShown(false)}
            >
              <div id="image-username-comment">
                <img
                  id="user-comment-image"
                  src={comment.user.profile_img}
                  alt="profile"
                />
                <h3 id="comment-username">{comment.user.username}:</h3>
                <p id="comment-p">{comment.content}</p>
              </div>
              {deleteShown && sessionUser?.id == comment.user_id && (
                <button
                  className={`delete-comment-button ${comment.user_id}`}
                  id={comment.id}
                  userId={comment.user_id}
                  onClick={deleteComment}
                >
                  Delete Comment
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    )
  );
};

export default VideoPage;
