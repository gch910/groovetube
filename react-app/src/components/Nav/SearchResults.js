import React from "react";

const SearchResults = ({searchResults}) => {
    return (
        searchResults.map(video => (
            <h1>{video.title}</h1>
        ))
    )
}

export default SearchResults;