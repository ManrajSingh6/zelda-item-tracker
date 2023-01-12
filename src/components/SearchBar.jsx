import React, { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';

function SearchBar(props){

    const [searchItem, setSearchItem] = useState("");

    // Method to handle change in search input field
    function handleChange(event){
        const {value} = event.target;
        setSearchItem(value);
    }

    // Method to handle click of search button
    function handleSubmit(event){
        event.preventDefault();
        props.makeQuery(searchItem);
        setSearchItem("");
    }
    
    return(
        <div className="form-div">
        <h2>Search {props.itemCategory} to view...</h2>
            <form>
                <input style={{fontSize: "20px", marginTop: "30px"}}
                    type="text" 
                    name="searchBar" 
                    className="search-bar"
                    onChange={handleChange} 
                    placeholder="Enter an item name..."
                    value={searchItem}>
                </input>
                <button onClick={handleSubmit} className="submit-btn"><SearchIcon /></button>
            </form>
        </div>
        
    );
}

export default SearchBar;
