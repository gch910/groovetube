import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getVideo } from "../../store/videos";

import "./VideoPage.css";

const VideoPage = () => {
  const { videoId } = useParams();
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const video = useSelector((state) => state.videos.current_video);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(getVideo(videoId)).then(() => setIsLoaded(true));
  });

  return (
    isLoaded && (
      <div id="outer-video-div">
        <div id="video-outer-div">
            <h2 id="video-h2">{video.title}</h2>
          <div id="current-video-div">
            <iframe
              id="current-video"
              width="100%"
              height="100%"
              src={video.video_path}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    )
  );
};

export default VideoPage;
