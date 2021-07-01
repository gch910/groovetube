import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect, useParams } from "react-router-dom";
import { getUserVideos, addCollection } from "../../store/videos";
import AllVideos from "../AllVideos";
import gifs from "../Home/gifs";
import imgs from "../Home/images";
import "./UserVideos.css";

const UserVideos = ({ userId, gifKeyCreator, imgKeyCreator, user }) => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const videos = useSelector((state) => state.videos.user_videos);
  const [isRemoved, setIsRemoved] = useState(false);
  const [hoverIndex, setHoverIndex] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [videosExist, setVideosExist] = useState(false);


  const buttonClassname = (index) => {
    if (index === hoverIndex) return "active";
    else return "button inactive";
  };

  const addVideo = async (e, video) => {
    e.preventDefault();
    await dispatch(addCollection(sessionUser?.id, e.target.id)).then(() =>
      setIsLoaded(true)
    );

    e.target.innerText = "Removed!";

    setTimeout(() => {
      setIsRemoved(true);
    }, 500);
  };

  const changeImg = (e, video) => {
    if (video && gifs[gifKeyCreator(video.gif_path)]) {
      e.target.src = gifs[gifKeyCreator(video.gif_path)];
    } else {
      video && (e.target.src = "https://i.stack.imgur.com/y9DpT.jpg");
    }
  };

  useEffect(() => {
    if(videos?.length) {
      setVideosExist(true)
    }
    dispatch(getUserVideos(userId)).then(() => setIsLoaded(true))

    return setIsRemoved(false)
  }, [dispatch, isRemoved]);

  if (!userId) {
    return <Redirect to="/login" />;
  }

  return (
    isLoaded && videos?.length ? (
      <>
        <div id="home-grid">
          {videos?.map((video, idx) => {
            return (
              <div
                key={idx}
                id="thumbnail-div"
                onMouseEnter={(e) => setHoverIndex(idx)}
                onMouseLeave={(e) => setHoverIndex(null)}
              >
                <Link to={`/videos/${video?.id}`}>
                  <img
                    onMouseEnter={(e) => changeImg(e, video)}
                    onMouseLeave={(e) =>
                      imgs[imgKeyCreator(video.img_path)]
                        ? (e.target.src = imgs[imgKeyCreator(video.img_path)])
                        : (e.target.src = video.img_path)
                    }
                    id={video?.gif_path}
                    className="thumbnail"
                    src={
                      imgs[imgKeyCreator(video.img_path)]
                        ? imgs[imgKeyCreator(video.img_path)]
                        : video.img_path
                    }
                  />
                </Link>
                {(sessionUser?.id === user?.id) ? (
                  <button
                    onClick={(e) => addVideo(e, video)}
                    id={video?.id}
                    className={`remove-video-button no-outline ${buttonClassname(
                      idx
                    )}`}
                  >
                    Remove
                  </button>
                ) : (
                  ""
                )}
                <Link id="thumbnail-h3-link" to={`/videos/${video?.id}`}>
                  <div id="thumbnail-h3-div">
                    <h3>{video.title}</h3>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </>
    ) : !videosExist && <AllVideos />
  );
};

export default UserVideos;
