import React from "react";
import './GenerateButtonStyle.css'

const GenerateRandomButton = ({onClick}) => {
    return(
        <div>
            <button className="btn-generate-random-number" onClick={onClick}>Generate Random Numbers</button>
        </div>
    );
}

export default GenerateRandomButton;