import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserVideos } from "../../store/videos";
import "./Home.css";

const Home = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const videos = useSelector((state) => state.videos.user_videos);
  const [isLoaded, setIsLoaded] = useState(false);
  const [image, setImage] = useState("/images/paak2.jpg")

  console.log(sessionUser);

  useEffect(() => {
    dispatch(getUserVideos(sessionUser?.id)).then(() => setIsLoaded(true));
  }, [dispatch]);

  let userVideos;

  videos ? (userVideos = Object.values(videos)) : (userVideos = null);

  console.log(userVideos);

  return (
    isLoaded && (
      <div>
        <img onMouseEnter={() => setImage("https://i.ytimg.com/an_webp/adLGHcj_fmA/mqdefault_6s.webp?du=3000&sqp=CIDgl4MG&rs=AOn4CLC-VQeBmokaTDucJ5lnL1yqWFW6hA")}
             onMouseLeave={() => setImage("/images/paak2.jpg")}
        src={image}/>
      </div>
    )
  );
};
// <img src="https://i.ytimg.com/an_webp/ferZnZ0_rSM/mqdefault_6s.webp?du=3000&sqp=CITRl4MG&rs=AOn4CLCZdV_F3sJRzv5WoatVPSWPFjptEg"/>
// <iframe id="test-youtube-video" width="480" height="270" src="//www.youtube.com/embed/adLGHcj_fmA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>
// <iframe id="test-youtube-video" width="480" height="270" src="//www.youtube.com/embed/ferZnZ0_rSM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>
// <iframe id="test-youtube-video" width="480" height="270" src="//www.youtube.com/embed/-wVraXhkjMI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>
// formula for ifram src "//www.youtube.com/embed/adLGHcj_fmA\" -
export default Home;
