import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getUserVideos, getAllVideos } from "../../store/videos";
import "./Home.css";

const Home = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const videos = useSelector((state) => state.videos.user_videos);
  const allVideos = useSelector((state) => state.videos.all_videos);
  const [isLoaded, setIsLoaded] = useState(false);
  const [image, setImage] = useState("");

  console.log(sessionUser);

  const changeImg = (e) => {
    e.target.src = e.target.id;
  };

  // const changeGif = (e) => {
  //   e.target.src =
  // }

  useEffect(() => {
    dispatch(getAllVideos()).then(() => setIsLoaded(true))
    dispatch(getUserVideos(sessionUser?.id)).then(() => setIsLoaded(true))
    
   
  }, [dispatch]);

  let videoCollection;

  sessionUser
    ? (videoCollection = sessionUser.video_collection)
    : (videoCollection = null);

  if (videoCollection) console.log(videoCollection);

  return (
    isLoaded && (
      <>
        {sessionUser ? (
          <>
            <h1 id="home-h1">Your Collection</h1>
            <div id="home-grid">
              {videos.map((video) => (
                <div id="thumbnail-div">
                  <Link to={`/videos/${video.id}`}>
                    <img
                      onMouseEnter={changeImg}
                      onMouseLeave={(e) =>
                        (e.target.src = video.img_path + ".jpg")
                      }
                      id={video?.gif_path}
                      className="thumbnail"
                      src={`${video.img_path}.jpg`}
                    />
                  </Link>
                  <Link id="thumbnail-h3-link" to={`/videos/${video.id}`}>
                    <div id="thumbnail-h3-div">
                      <h3>{video.title}</h3>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div>
            <h1 id="all-videos-h1">All Videos</h1>
            <div id="home-grid">
              {allVideos.map((video) => (
                <div id="thumbnail-div">
                  <Link to={`/videos/${video.id}`}>
                    <img
                      onMouseEnter={changeImg}
                      onMouseLeave={(e) =>
                        (e.target.src = video.img_path + ".jpg")
                      }
                      id={video?.gif_path}
                      className="thumbnail"
                      src={`${video.img_path}.jpg`}
                    />
                  </Link>
                  <Link id="thumbnail-h3-link" to={`/videos/${video.id}`}>
                    <div id="thumbnail-h3-div">
                      <h3>{video.title}</h3>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </>
    )
  );
};

export default Home;
