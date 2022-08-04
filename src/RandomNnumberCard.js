import React, { Component } from "react";

// RandomNumberCard: Class that handles logic for 
// the RandomNumberCard Object
class RandomNnumberCard extends Component{
  constructor(props){
    super(props)
  }

  // GenerateRandomNumber: Create a array of 5 unique numbers.
  // picks number from 1-70 
  generateRandomNumber(){
    let copy = [];
    for(let i = 0; i < 5; i++){
      var random = Math.floor((Math.random()* 70) + 1);
      if(!copy.includes(random)){
        copy.push(random);
      }
      else{
        i--;
      }
    }
    return this.addMegaBallNumber(copy.join(' '));
  }

  // AddMegaBallNumber: Concats a Random Number from 1-25 at the
  // end of the random number array
  addMegaBallNumber(randomarray){
    var addRandom = Math.floor((Math.random()* 25 ) + 1);
    return randomarray.concat(" " + addRandom);
  }

  render(){
    return(
      <div>
        <h2>{this.props.number}</h2>
   </div>
      )
  }

}

export default RandomNnumberCard