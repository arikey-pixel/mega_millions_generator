import React from "react";
import './CircleCardsStyle.css'

const CircleCards = ({arrayCards}) =>{
    
const names = [];

{arrayCards.forEach((item) =>{
    item.forEach((ele) => {
        names.push(<li><h2 className="circle">{ele}</h2></li>)
    })
})}

return(
    <div>
        <ul className="circle-list-item">
            {names.splice(0,6)}
            <br/>
            {names.splice(0,6)}
            <br/>
            {names.splice(0,6)}
            <br/>
            {names.splice(0,6)}
            <br/>
            {names.splice(0,6)}
        </ul>
    </div>
);
    
}

export default CircleCards;