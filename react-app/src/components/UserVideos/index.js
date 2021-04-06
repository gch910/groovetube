import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getUserVideos } from "../../store/videos";
import gifs from "../Home/gifs";
import imgs from "../Home/images";

const UserVideos = ({userId}) => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const videos = useSelector((state) => state.videos.user_videos);

  const changeImg = (e, video) => {
    // console.log(video.gif_path);
    video &&
      (e.target.src =
        gifs[`${video.gif_path.match(/(?<=gifs\/).*(?=\.gif)/)[0]}`]);
  };

  useEffect(() => {
    dispatch(getUserVideos(userId))
  }, [dispatch]);

  return (
      <>
        <div id="home-grid">
          {videos.map((video) => {
            return (
              <div id="thumbnail-div">
                <Link to={`/videos/${video.id}`}>
                  <img
                    onMouseEnter={(e) => changeImg(e, video)}
                    onMouseLeave={(e) =>
                      (e.target.src =
                        imgs[
                          `${
                            video.img_path.match(/(?<=images\/).*(?=\.jpg)/)[0]
                          }`
                        ])
                    }
                    id={video?.gif_path}
                    className="thumbnail"
                    src={
                      imgs[
                        `${video.img_path.match(/(?<=images\/).*(?=\.jpg)/)[0]}`
                      ]
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

export default UserVideos;
