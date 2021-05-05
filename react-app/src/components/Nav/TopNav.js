import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllVideos, getSearchResults } from "../../store/videos";
import { Link, useHistory } from "react-router-dom";
import SearchResults from "./SearchResults"
import logo from "./logo"

const TopNav = () => {
  const dispatch = useDispatch();
  const videos = useSelector((state) => state.videos.all_videos);
  const sessionUser = useSelector((state) => state.session.user);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const history = useHistory();

  // useEffect(() => {
  //   dispatch(getAllVideos());
  // }, [dispatch]);


//   let allVideos;
//   videos ? (allVideos = Object.values(videos)) : (allVideos = null);

  // const onSearchSubmit = (e) => {
  //   // e.preventDefault();
  //   let found = false;
  //   videos.forEach((video) => {
  //   //   if (video.title.includes(search.toLowerCase())) {
  //     if (video.title.toLowerCase().includes(search)) {
  //      found = true;
  //       // searchResults.push(video);
  //      console.log("it matched")
  //      return history.push(`/search-results`);
  //     }
  //   });
  //   if (found === false) return history.push("/not-found");
  // };
  const onSearchSubmit = async (e) => {
    e.preventDefault();
    
    await dispatch(getSearchResults(search)).then((res) => {
      if(res.length) {
        setSearch("");
        return history.push('/search-results')
      } else {
        setSearch("");
        return history.push('/no-results')
      }
      
    })
    
    
    
    // if (found === false) return history.push("/not-found");
  };

  return (
    <nav id="top-nav">
      <Link to="/"><img id="nav-logo" src={logo}/></Link>
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
