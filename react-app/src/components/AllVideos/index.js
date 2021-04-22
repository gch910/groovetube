import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllVideos } from "../../store/videos";
import gifs from "../Home/gifs";
import imgs from "../Home/images";

const AllVideos = ({ isLoaded }) => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const allVideos = useSelector((state) => state.videos.all_videos);
  const [videosLoaded, setVideosLoaded] = useState(false);
  //   const [image, setImage] = useState("");
  const gifKeyCreator = (path) => {
    const pathName = path.split("/")[2];

    const gifKey = pathName?.slice(0, pathName.indexOf("."));

    return gifKey;
  };
  const imgKeyCreator = (path) => {
    const pathName = path.split("/")[2];

    const imgKey = pathName?.slice(0, pathName.indexOf("."));

    return imgKey;
  };

  const changeImg = (e, video) => {
    if (video && gifs[gifKeyCreator(video.gif_path)]) {
      e.target.src = gifs[gifKeyCreator(video.gif_path)];
    } else {
      video && (e.target.src = "https://i.stack.imgur.com/y9DpT.jpg");
    }
  };

  useEffect(() => {
    dispatch(getAllVideos()).then(() => {
      if (!isLoaded) {
        setVideosLoaded(true);
      }
    });
  }, [dispatch]);

  return (
    <>
      <h1 id="home-h1">
        {sessionUser ? "Add to your Collection!" : "All Videos"}
      </h1>
      <div id="home-grid">
        {allVideos.map((video) => {
          return (
            <div id="thumbnail-div">
              <Link to={`/videos/${video.id}`}>
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
  );
};

export default AllVideos;
