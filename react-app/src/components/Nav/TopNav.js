import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllVideos } from "../../store/videos";
import { Link, useHistory } from "react-router-dom";

const TopNav = () => {
  const dispatch = useDispatch();
  const videos = useSelector((state) => state.videos.all_videos);
  const sessionUser = useSelector((state) => state.session.user);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const history = useHistory();

  useEffect(() => {
    dispatch(getAllVideos());
  }, [dispatch]);


//   let allVideos;
//   videos ? (allVideos = Object.values(videos)) : (allVideos = null);

  const onSearchSubmit = (e) => {
    // e.preventDefault();
    let found = false;
    videos.forEach((video) => {
    //   if (video.title.includes(search.toLowerCase())) {
      if (video.title.toLowerCase().includes(search)) {
       found = true;
        // searchResults.push(video);
       console.log("it matched")
       return history.push(`/search-results`);
      }
    });
    if (found === false) return history.push("/not-found");
  };

  return (
    <nav id="top-nav">
      <form id="search-bar-form" onSubmit={onSearchSubmit}>
        <input
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          id="search-bar"
          className="no-outline"
          type="text"
          placeholder="Search..."
        />
      </form>
    </nav>
  );
};

export default TopNav;
