import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./SearchResults.css";
import gifs from "../Home/gifs";
import imgs from "../Home/images";

const SearchResults = () => {
  const searchResults = useSelector((state) => state.videos.search_results);

  const changeImg = (e, video) => {
      video &&
      (e.target.src =
        gifs[`${video.gif_path.match(/(?<=gifs\/).*(?=\.gif)/)[0]}`]);
  };
  return (
    <div>
      {searchResults.map((video) => (
        <div id="search-results-videos">
          <div id="search-results-title-div">
            <Link to={`/videos/${video.id}`}>
              <h3 id="search-results-title">{video.title}</h3>
            </Link>
          </div>
          <div id="search-results-div">
            <Link to={`/videos/${video.id}`}>
              <img
                onMouseEnter={(e) => changeImg(e, video)}
                onMouseLeave={(e) =>
                  (e.target.src =
                    imgs[
                      `${
                        video.img_path.match(/(?<=images\/).*(?=\.jpg)/)[0]
                      }`
                    ])
                }
                className="thumbnail"
                src={
                  imgs[
                    `${video.img_path.match(/(?<=images\/).*(?=\.jpg)/)[0]}`
                  ]
                }
              />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
