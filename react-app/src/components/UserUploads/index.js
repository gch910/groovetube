import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getUploadedVideos, deleteUserVideo } from "../../store/videos";
import gifs from "../Home/gifs";
import imgs from "../Home/images";
import "./UserUploads.css";

const UserUploads = ({
  userId,
  gifKeyCreator,
  imgKeyCreator,
  user,
  sessionUser,
}) => {
  const dispatch = useDispatch();
  const uploadedVideos = useSelector((state) => state.videos.uploaded_videos);
  const [isLoaded, setIsLoaded] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const [shown, setShown] = useState(false);
  // const [buttonShown, setButtonShown] = useState(false);


  const deleteVideoClick = (e) => {
    dispatch(deleteUserVideo(e.target.id));

    e.target.innerText = "Deleted!";

    setTimeout(() => {
      setDeleted(true);
    }, 1000);
  };

  const changeImg = (e, video) => {
    if (video && gifs[gifKeyCreator(video.gif_path)]) {
      e.target.src = gifs[gifKeyCreator(video.gif_path)];
    } else {
      video && (e.target.src = "https://i.stack.imgur.com/y9DpT.jpg");
    }
    // setButtonShown(true);
  };

  useEffect(() => {
    dispatch(getUploadedVideos(userId)).then(() => setIsLoaded(true));

    return setDeleted(false);
  }, [dispatch, deleted]);

  return (
    isLoaded && (
      <>
        <div id="home-grid">
          {uploadedVideos.map((video) => {
            return (
              <div id="thumbnail-div" onMouseEnter={(e) => setShown(true)} onMouseLeave={(e) => setShown(false)}>
                <Link to={`/videos/${video.id}`}>
                  <img
                    onMouseEnter={(e) => changeImg(e, video)}
                    onMouseLeave={(e) => {
                      imgs[imgKeyCreator(video.img_path)]
                        ? (e.target.src = imgs[imgKeyCreator(video.img_path)])
                        : (e.target.src = video.img_path)
                    }}
                    id={video?.gif_path}
                    className="thumbnail"
                    src={
                      imgs[imgKeyCreator(video.img_path)]
                        ? imgs[imgKeyCreator(video.img_path)]
                        : video.img_path
                    }
                  />
                </Link>
                {sessionUser.id === user.id && shown ? (
                  <button
                    shown={shown}
                    onClick={(e) => deleteVideoClick(e)}
                    id={video.id}
                    className="delete-video-button"
                  >
                    Delete
                  </button>
                ) : (
                  ""
                )}
                <Link id="thumbnail-h3-link" to={`/videos/${video.id}`}>
                  <div id="thumbnail-h3-div">
                    <h3>{video.title}</h3>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </>
    )
  );
};

export default UserUploads;
