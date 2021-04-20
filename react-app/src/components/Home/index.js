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

  const gifKeyCreator = (path) => {
    const pathName = path.split("/")[2]
 
    const gifKey = pathName?.slice(0, pathName.indexOf("."))
    
    return gifKey
  }
  const imgKeyCreator = (path) => {
    const pathName = path.split("/")[2]
 
    const imgKey = pathName?.slice(0, pathName.indexOf("."))
    
    return imgKey
  }


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
            <h1 id="home-h1">{ videos?.length ? "Your Collection" : ""}</h1>
            <UserVideos userId={sessionUser?.id} isLoaded={isLoaded} gifKeyCreator={gifKeyCreator} imgKeyCreator={imgKeyCreator}/>
          </div>
        ) : (
          <AllVideos />
        )}
      </>
    )
  );
};

export default Home;
