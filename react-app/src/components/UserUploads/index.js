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
  const [hoverIndex, setHoverIndex] = useState(null);

  // const [buttonShown, setButtonShown] = useState(false);

  const buttonClassname = (index) => {
    if (index === hoverIndex) return "active";
    else return "button inactive";
  };

  const deleteVideoClick = (e) => {
    dispatch(deleteUserVideo(e.target.id));

    e.target.innerText = "Deleted!";

    setTimeout(() => {
      setDeleted(true);
    }, 1000);
  };

  const changeImg = (e, video, idx) => {
    setHoverIndex(idx)
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
          {uploadedVideos.map((video, idx) => {
            return (
              <div
                key={idx}
                id="thumbnail-div"
                number={video.id}
                onMouseEnter={(e) => setHoverIndex(idx)}
                onMouseLeave={(e) => setHoverIndex(null)}
              >
                <Link to={`/videos/${video.id}`}>
                  <img
                    onMouseEnter={(e) => changeImg(e, video, idx)}
                    onMouseLeave={(e) => {
                      imgs[imgKeyCreator(video.img_path)]
                        ? (e.target.src = imgs[imgKeyCreator(video.img_path)])
                        : (e.target.src = video.img_path);
                    }}
                    id={video?.gif_path}
                    className={`thumbnail`}
                    src={
                      imgs[imgKeyCreator(video.img_path)]
                        ? imgs[imgKeyCreator(video.img_path)]
                        : video.img_path
                    }
                  />
                </Link>
                {sessionUser.id === user.id ? (
                    <button
                      onClick={(e) => deleteVideoClick(e)}
                      id={video.id}
                      className={`delete-video-button ${buttonClassname(idx)}`}
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
