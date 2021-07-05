import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSearchResults } from "../../store/videos";
import { Link, useHistory } from "react-router-dom";
import logo from "./logo"
import "./NavBar.css";

const TopNav = () => {
  const dispatch = useDispatch();
  const videos = useSelector((state) => state.videos.all_videos);
  const sessionUser = useSelector((state) => state.session.user);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const history = useHistory();

  //search algo implemented on the backend
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
