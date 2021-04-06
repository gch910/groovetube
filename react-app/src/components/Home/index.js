import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getUserVideos, getAllVideos } from "../../store/videos";
import UserVideos from "../UserVideos";
import AllVideos from "../AllVideos";
import "./Home.css";

const Home = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const videos = useSelector((state) => state.videos.user_videos);
  const allVideos = useSelector((state) => state.videos.all_videos);
  const [isLoaded, setIsLoaded] = useState(false);


  useEffect(() => {
    // dispatch(getAllVideos()).then(() => 
    setIsLoaded(true);
    // dispatch(getUserVideos(sessionUser?.id)).then(() => setIsLoaded(true));
  }, []);


  return (
    isLoaded && (
      <>
        {sessionUser ? (
          <div>
            <h1 id="home-h1">Your Collection</h1>
            <UserVideos userId={sessionUser?.id} isLoaded={isLoaded} />
          </div>
        ) : (
          <AllVideos />
        )}
      </>
    )
  );
};

export default Home;
