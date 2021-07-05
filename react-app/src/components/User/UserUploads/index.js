import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getUploadedVideos, deleteUserVideo } from "../../../store/videos";
import imgs from "../../Home/images";
import { imgKeyCreator, changeImg } from "../../utils";
import "./UserUploads.css";

const UserUploads = ({ userId, user, sessionUser }) => {
  const dispatch = useDispatch();
  const uploadedVideos = useSelector((state) => state.videos.uploaded_videos);
  const [isLoaded, setIsLoaded] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const [hoverIndex, setHoverIndex] = useState(null);

  const buttonClassname = (index) => {
    if (index === hoverIndex) return "active";
    else return "button inactive";
  };

  const deleteVideoClick = (e) => {
    dispatch(deleteUserVideo(e.target.id));

    e.target.innerText = "Deleted!";

    setTimeout(() => {
      setDeleted(true);
      e.target.innerText = "Delete";
    }, 500);
  };

  useEffect(() => {
    dispatch(getUploadedVideos(userId)).then(() => setIsLoaded(true));

    return setDeleted(false);
  }, [dispatch, deleted]);

  return (
    isLoaded && (
      <>
        <div id="home-grid">
          {uploadedVideos?.map((video, idx) => {
            return (
              <div
                key={idx}
                id="thumbnail-div"
                number={video?.id}
                onMouseEnter={(e) => setHoverIndex(idx)}
                onMouseLeave={(e) => setHoverIndex(null)}
              >
                <Link to={`/videos/${video?.id}`}>
                  <img
                    onMouseEnter={(e) => changeImg(e, video, idx)}
                    onMouseLeave={(e) => {
                      imgs[imgKeyCreator(video.img_path)]
                        ? (e.target.src = imgs[imgKeyCreator(video?.img_path)])
                        : (e.target.src = video?.img_path);
                    }}
                    id={video?.gif_path}
                    className={`thumbnail`}
                    src={
                      imgs[imgKeyCreator(video?.img_path)]
                        ? imgs[imgKeyCreator(video?.img_path)]
                        : video?.img_path
                    }
                  />
                </Link>
                {sessionUser?.id === user?.id ? (
                  <button
                    onClick={(e) => deleteVideoClick(e)}
                    id={video.id}
                    className={`delete-video-button no-outline ${buttonClassname(
                      idx
                    )}`}
                  >
                    Delete
                  </button>
                ) : (
                  ""
                )}
                <Link id="thumbnail-h3-link" to={`/videos/${video?.id}`}>
                  <div id="thumbnail-h3-div">
                    <h3>{video?.title}</h3>
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
