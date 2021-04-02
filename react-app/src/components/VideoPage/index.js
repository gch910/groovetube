import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getVideo } from "../../store/videos";
import IframeResizer from "iframe-resizer-react";

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
        <h2 id="video-h2">{video.title}</h2>
        <div id="current-video-div">
          <iframe
            id="current-video"
            // width="640px"
            // height="360px"
            src={video.video_path}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
        <div id="add-video-button-div">
          <button>Add Video</button>
        </div>
      </div>
    )
  );
};

export default VideoPage;
