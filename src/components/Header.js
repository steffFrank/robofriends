import React from "react";
import "../css/header.css";
import Search from "./Search";

const Header = (props) => {
        return (
            <header>
                <h1>robofriends</h1>
                <Search onSearchField={props.onSearchField}/>
            </header>
        )
}


export default Header;