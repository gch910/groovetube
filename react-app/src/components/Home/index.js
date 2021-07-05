import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import UserVideos from "../User/UserVideos";
import AllVideos from "../AllVideosPage/AllVideos";
import "./Home.css";

const Home = () => {
  const sessionUser = useSelector((state) => state.session.user);
  const videos = useSelector((state) => state.videos.user_videos);
  const [isLoaded, setIsLoaded] = useState(false);



  useEffect(() => {
    setIsLoaded(true);
  }, []);


  return (
    isLoaded && (
      <>
        {sessionUser ? (
          <div>
            <h1 id="home-h1">{ videos?.length ? "Your Collection" : ""}</h1>
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
