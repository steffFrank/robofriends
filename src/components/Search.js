import React from "react";
import "../css/search.css";

const Search = (props) => {
        return(
            <input onChange={props.onSearchField}></input>
        );
}


export default Search;