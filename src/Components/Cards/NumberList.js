import React, { useState } from "react";
import "./NumberListStyle.css";
import NumberInput from "../Input/NumberInput";
import GenerateRandomButton from "../Button/GenerateButton";
import CircleCards from "../Circle/CircleCards";

const NumberList = () =>{
  const data = [].map((value, index) => ({
    id: index, body: value,
  }));
const[numbers, setNumbers] = useState([]);
const[cards,setCards] = useState(1);
const[num, setNum] = useState([]);
const array = [];

// handleChange: This will change the number of cards from the default.
function handleChange(e){
  if(e.target.value.length === 0){
    setCards(1);
  }
  else{
    setCards(e.target.value)
  }
}

// handleKeyPress: This will handle when the user wants to press the 
// enter instead of pressing the Generate Button
function handleKeyPress(e){
  if(e.key === "Enter"){
    handleClick();
  }
}

// clearArray: This will clear the numbers array of all current numbers.
function clearArray(){
  numbers.length = 0;
}

  // GenerateRandomNumber: Create a array of 5 unique numbers.
  // picks number from 1-70 
  function generate(){
    const arr = [];
    for(let i = 0; i < 5; i++){
      var num = Math.floor((Math.random()* 70) + 1);
      if(!arr.includes(num)){
        arr.push(num);
      }
      else{
        i--;
      }
    }
    return addMegaBallNumber(arr);
  }

  // handleClick: \This will set all the random numbers cards.
  function handleClick(){
    clearArray();
    for(let i = 0; i < cards; i++){
      data.push({body: generate()})
    }
    setNumbers(data);
    circleNumbers();
  }

  // circleNumbers: This converts the array into seperate arrays to add circle around the numbers
  function circleNumbers(){
    const test = [];

    data.forEach((item) => {
      array.push(item.body);
    });

    for(var i = 0; i < array.length; i++){
      test.push(array[i]);
    }
    setNum(test);
  }

   // AddMegaBallNumber: Concats a Random Number from 1-25 at the
  // end of the random number array
  function addMegaBallNumber(randomarray){
    var addRandom = Math.floor((Math.random()*25) + 1);
    return randomarray.concat(addRandom);
  }

  return(
    <div>
      <NumberInput onChange={(e) => handleChange(e)} onKeyPress={(e) => handleKeyPress(e)}/>
      <CircleCards arrayCards={num}/>
      <GenerateRandomButton onClick={handleClick}/>
    </div>
  )

}

export default NumberList;