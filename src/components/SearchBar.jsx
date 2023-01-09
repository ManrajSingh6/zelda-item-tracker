import React, { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';

function SearchBar(props){

    function handleSubmit(event){
        event.preventDefault();
    }

    return(
        <div className="form-div">
            <form>
                <input type="text" name="searchBar" className="search-bar" placeholder="Enter an item name or ID..."></input>
                <button onClick={handleSubmit} className="submit-btn"><SearchIcon /></button>
            </form>
        </div>
        
    );
}

export default SearchBar;
