import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./SearchResults.css";

const SearchResults = () => {
  const searchResults = useSelector((state) => state.videos.search_results);
  const changeImg = (e) => {
    e.target.src = e.target.id;
  };
  return (
    <div>
      {searchResults.map((video) => (
        <div>
          <div id="search-results-title-div">
            <Link to={`/videos/${video.id}`}>
              <h3 id="search-results-title">{video.title}</h3>
            </Link>
          </div>
          <div id="search-results-div">
            <Link to={`/videos/${video.id}`}>
              <img
                onMouseEnter={changeImg}
                onMouseLeave={(e) => (e.target.src = video.img_path + ".jpg")}
                id={video?.gif_path}
                className="thumbnail"
                src={`${video.img_path}.jpg`}
              />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
