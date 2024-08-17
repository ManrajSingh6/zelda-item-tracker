import React, {useState} from "react";

import DropdownItem from "./DropdownItem";

function Header(props){

    const[activeItem, setActiveItem] = useState(1);

    const[activeState, setActive] = useState("nav-menu");

    const toggleNav = () => {
        activeState === "nav-menu" ? setActive("nav-menu nav-active") : setActive("nav-menu");
    }

    // Call function to update display based on change of category, update active item state to change header item color
    function handleClick(index){
        var category = "";

        if (index === 2){
            category = "equipment"
        } else if (index === 3){
            category = "materials"
        } else if (index === 4){
            category = "monsters"
        } else if (index === 5){
            category = "treasure"
        }

        props.updateDisplay(category); 
        setActiveItem(index)
    }

    return (
        <header>
            <nav className="nav">
                <h1 onClick={() => props.updateDisplay(props.currentCategory)} className="nav-brand">Zelda BOTW Item Tracker</h1> 
                <ul className={activeState}>
                    <DropdownItem
                        onClick={() => handleClick(1)}  
                        style={{color: activeItem === 1 ? 'rgb(0, 217, 255)' : '#fff'}} 
                        updateCType={props.updateCType} updateDisplay={props.updateDisplay}
                    />
                    <li 
                        onClick={() => handleClick(2)} 
                        className="nav-item"
                        style={{color: activeItem === 2 ? 'rgb(0, 217, 255)' : '#fff'}}
                        >Equipment
                    </li>
                    <li 
                        onClick={() => handleClick(3)} 
                        className="nav-item"
                        style={{color: activeItem === 3 ? 'rgb(0, 217, 255)' : '#fff'}}
                        >Materials
                    </li>
                    <li 
                        onClick={() => handleClick(4)} 
                        className="nav-item"
                        style={{color: activeItem === 4 ? 'rgb(0, 217, 255)' : '#fff'}}
                        >Monsters
                    </li>
                    <li 
                        onClick={() => handleClick(5)} 
                        className="nav-item"
                        style={{color: activeItem === 5 ? 'rgb(0, 217, 255)' : '#fff'}}
                        >Treasure
                    </li>
                </ul>
                <div onClick={toggleNav} className="nav-toggler">
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </nav>
        </header>
    );
}

export default Header;