import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {getUploadedVideos} from "../../store/videos";
import gifs from "../Home/gifs";
import imgs from "../Home/images";

const UserUploads = ({userId}) => {
  const dispatch = useDispatch();
  const uploadedVideos = useSelector(state => state.videos.uploaded_videos)
  const [isLoaded, setIsLoaded] = useState(false);
 

  const changeImg = (e, video) => {
    // console.log(video.gif_path);
    video &&
      (e.target.src =
        gifs[`${video.gif_path.match(/(?<=gifs\/).*(?=\.gif)/)[0]}`]);
  };

  useEffect(() => {
    dispatch(getUploadedVideos(userId)).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    isLoaded && (
      <>
        <div id="home-grid">
          {uploadedVideos.map((video) => {
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
    )
  );
};

export default UserUploads;