import React from "react";
import './HeaderStyle.css'

// Header Component Handles all headers on the Page.
const Header = () =>{
    return(
        <div>
            <h1 className="Lottery-Header">Lottery Number Generator</h1>
            <h3 className="Question-Header">How Many cards are you playing?</h3>
        </div>
    )
}

export default Header;