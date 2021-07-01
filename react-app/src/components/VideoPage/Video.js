import React from "react";

const Video = ({video}) => {
  return (
    <div id="current-video-div">
      <iframe
        id="current-video"
        width="100%"
        height="100%"
        src={video?.video_path}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Video;
