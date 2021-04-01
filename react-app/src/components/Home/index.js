import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserVideos } from "../../store/videos";
import "./Home.css";

const Home = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const videos = useSelector((state) => state.videos.user_videos);
  const [isLoaded, setIsLoaded] = useState(false);
  const [image, setImage] = useState("");

  console.log(sessionUser);

  const changeImg = (e) => {
    e.target.src = e.target.id
  }

  // const changeGif = (e) => {
  //   e.target.src = 
  // }

  useEffect(() => {
    dispatch(getUserVideos(sessionUser?.id)).then(() => setIsLoaded(true));
  }, [dispatch]);

  let userVideos;

  videos ? (userVideos = Object.values(videos)) : (userVideos = null);

  if (userVideos) console.log(userVideos[0]);

  return (
    isLoaded && (
      <div id="home-grid">
        {userVideos.map(video => (
        <img 
        onMouseEnter={changeImg}
        onMouseLeave={(e) => e.target.src = video.img_path + '.jpg'}
        id={video.gif_path}
        className="thumbnail"
        src={`${video.img_path}.jpg`}/>
        ))}
      </div>
    )
  );
};

export default Home




