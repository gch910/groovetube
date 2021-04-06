import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllVideos } from "../../store/videos";
import AllVideos from "../AllVideos";
import { Link } from "react-router-dom";
import "./AllVideos.css";

const AllVideosPage = () => {
  const dispatch = useDispatch();
  const videos = useSelector((state) => state.videos.all_videos);
  const sessionUser = useSelector((state) => state.session.user);
  const [isLoaded, setIsLoaded] = useState(false);

  const changeImg = (e) => {
    e.target.src = e.target.id;
  };

  useEffect(() => {
    dispatch(getAllVideos()).then(() => setIsLoaded(true));
  }, [dispatch]);

  // let allVideos;

  // videos ? (allVideos = Object.values(videos)) : (allVideos = null);

  return (
    isLoaded && (
     <AllVideos />
    )
  );
};

export default AllVideosPage;
