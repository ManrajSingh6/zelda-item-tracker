import React from "react";

const currYear = new Date().getFullYear();

function Footer(){
    return (<footer>
        <h4 className='footer'>Created by <a href="https://github.com/ManrajSingh6" target="__blank">Manraj Singh</a>. Copyright © {currYear}</h4>
    </footer>);
}

export default Footer;