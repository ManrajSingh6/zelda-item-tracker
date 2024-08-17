import React, { useState } from "react";
import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from "@mui/material";

const formStyle = {
    width: "100%",
    padding: "30px",
    
};

function ItemSelectButtons(props){

    // state management for items displayed on screen
    const [itemCount, setItemCount] = useState(12);

    // Function to handle radio button click
    function handleChange(event){
        const {value} = event.target;
        setItemCount(value);
        if (value === "All"){
            props.changeDisplayItems(100);
        } else {
            props.changeDisplayItems(value);
        }
        
    }

    // Return radio buttons
    return (
        <FormControl style={formStyle}>
            <FormLabel id="demo-row-radio-buttons-group-label" style={{fontFamily: 'Signika Negative', fontSize: "1.2rem"}}>Currently displaying {itemCount} items</FormLabel>
            <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                defaultValue="12"
            >
                <FormControlLabel value={12} control={<Radio />} label="12"   onClick={handleChange} />
                <FormControlLabel value={24} control={<Radio />} label="24"   onClick={handleChange} />
                <FormControlLabel value={36} control={<Radio />} label="36"   onClick={handleChange} />
                <FormControlLabel value="All" control={<Radio />} label="All" onClick={handleChange} />
            </RadioGroup>
        </FormControl>
    );
}

export default ItemSelectButtons;