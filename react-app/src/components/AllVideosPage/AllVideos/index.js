import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllVideos } from "../../../store/videos";
import imgs from "../../Home/images";
import { imgKeyCreator, changeImg } from "../../utils";

//component for mapping over and displaying all videos
const AllVideos = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const allVideos = useSelector((state) => state.videos.all_videos);

  useEffect(() => {
    dispatch(getAllVideos());
  }, [dispatch]);

  return (
    <>
      <h1 id="home-h1">
        {sessionUser ? "Add To Your Collection!" : "Browse All Videos"}
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
