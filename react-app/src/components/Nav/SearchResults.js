import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./SearchResults.css";
import imgs from "../Home/images";
import { imgKeyCreator, changeImg } from "../utils";

const SearchResults = () => {
  const searchResults = useSelector((state) => state.videos.search_results);

  return (
    <div id="outer-search-results">
      {searchResults.map((video) => (
        <div id="search-results-videos">
          <div id="search-results-title-div">
            <Link id="search-results-link" to={`/videos/${video.id}`}>
              <h3 id="search-results-title">{video.title}</h3>
            </Link>
          </div>
          <div id="search-results-div">
            <Link to={`/videos/${video.id}`}>
              <img
                onMouseEnter={(e) => changeImg(e, video)}
                onMouseLeave={(e) =>
                  imgs[imgKeyCreator(video.img_path)]
                    ? (e.target.src = imgs[imgKeyCreator(video.img_path)])
                    : (e.target.src = video.img_path)
                }
                className="thumbnail"
                id="search-img"
                src={
                  imgs[imgKeyCreator(video.img_path)]
                    ? imgs[imgKeyCreator(video.img_path)]
                    : video.img_path
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
