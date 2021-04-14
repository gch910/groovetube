import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import {
  getVideo,
  addCollection,
  getUserVideos,
  deleteUserComment,
} from "../../store/videos";
import { addUserFollow } from "../../store/follows";
import CommentForm from "./CommentForm";
import ButtonDiv from "./ButtonDiv";
import Button from '@material-ui/core/Button';
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
  const [hoverIndex, setHoverIndex] = useState(null);

  const buttonClassname = (index) => {
    if (index === hoverIndex) return "active";
    else return "button inactive";
  };
  

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

    return (
      setNewComment(false),
      setIsAdded(false))
  }, [dispatch, isAdded, newComment, deleted]);

  // useEffect(() => {
  //   video &&
  //     dispatch(getUserFollows(video.user.id)).then(() => setIsLoaded(true));
  // }, [dispatch, video]);

  if (sessionUser?.user) userId = sessionUser?.user?.id;

  return (
    isLoaded && (
      <div id="outer-video-div">
        <Link to={`/users/${video?.user?.id}`}><h2 id="uploaded-by">Uploaded By: {video?.user?.username}</h2></Link>
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
          <h3>{video?.comments[0] ? "Comments:" : "Be the First to Comment!"}</h3>
          {video?.comments.map((comment, idx) => (
            <div
              className="comment-div"
              onMouseEnter={() => (setDeleteShown(true), setHoverIndex(idx))}
              onMouseLeave={() => (setDeleteShown(false), setHoverIndex(null))}
            >
              <div id="image-username-comment">
                <img
                  id="user-comment-image"
                  src={comment.user.profile_img}
                  alt="profile"
                />
                <Link to={`/users/${comment?.user?.id}`} id="comment-username-link"><h3 id="comment-username">{comment.user.username}:</h3></Link>
                <p id="comment-p">{comment.content}</p>
              </div>
              {deleteShown && sessionUser?.id == comment.user_id && (
                <button
                  className={`delete-comment-button ${comment.user_id} ${buttonClassname(idx)}`}
                  id={comment.id}
                  userId={comment.user_id}
                  onClick={deleteComment}
                >
                  Delete
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
