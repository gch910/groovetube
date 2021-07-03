import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllVideos } from "../../store/videos";
import AllVideos from "../AllVideos";
import "./AllVideos.css";

//meant to render AllVideos component
const AllVideosPage = () => {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(getAllVideos()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    isLoaded && (
     <AllVideos />
    )
  );
};

export default AllVideosPage;
