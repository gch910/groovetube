import React from "react";

const Thumbnail = ({video}) => {
  return (
    <div id="thumbnail-div">
      <Link to={`/videos/${video.id}`}>
        <img
          onMouseEnter={changeImg}
          onMouseLeave={(e) => (e.target.src = video.img_path + ".jpg")}
          id={video?.gif_path}
          className="thumbnail"
          src={`${video.img_path}.jpg`}
        />
      </Link>
      <Link id="thumbnail-h3-link" to={`/videos/${video.id}`}>
        <div id="thumbnail-h3-div">
          <h3>{video.title}</h3>
        </div>
      </Link>
    </div>
  );
};

export default Thumbnail;
