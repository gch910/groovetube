import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const SearchResults = () => {
    const searchResults = useSelector(state => state.videos.search_results);
    return (
        searchResults.map(video => (
            <h1>{video.title}</h1>
        ))
    )
}

export default SearchResults;