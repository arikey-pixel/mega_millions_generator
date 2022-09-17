import React from "react";
import './NumberInputStyle.css'

// NumberInput Component handles all the input box operations.
const NumberInput = ({onChange, onKeyPress}) => {
    return(
        <div>
            <input class="input-card-number"
            type={'number'}
            min= "1"
            placeholder="Type in here"
            onKeyPress={onKeyPress}
            onChange={onChange}
            />
        </div>
    )
}

export default NumberInput;