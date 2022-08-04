import React, { Component } from "react";

const data = [].map((value, index) => ({
    id: index, body: value,
  }));

class RandomModule extends Component{
    constructor(){
        super()
        this.state={
            data,
            cardNum: 1,
        }
    }

  // changeCardNum: Sets state of CarNum variable when user inputs
  // a new number.
  changeCardNum(e){
    this.setState({
      cardNum: e.target.value,
    })
  }

  // onClearArray: Sets the length of data array to zero to empty the
  // array.
  onClearArray() {
    this.setState({
      data: data.length = 0,
    })
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

  // handleClickRandomNumberCard: Sets the state value of number array
  // that is generated through the RandomNumberCard class.
  handleClickRandomNumberCard = () =>{
    this.onClearArray();
    this.setState({
      data: this.createNumberCards(),
    })
  }

  // TODO: Change the name of this variable as well as move it
  // copy: Generates all the nessary card to diplay on the application
  createNumberCards(){
    for(let i = 0; i < this.state.cardNum; i++){
     data.push({id: i + 1,body: this.generateRandomNumber()})
    }
    return data;
  }

    render() {
        return (
            <div>
            <input 
              type={'number'} 
              onChange={(e) => this.changeCardNum(e)}
              min="1" 
              placeholder="Type in here"/>
              <div>
              {data.map(((item)=> (
                  <div key={item.id}>
                  <h2>{item.id} - {item.body}</h2>
                  </div>
                )))}
              </div>
              <div>
              <button 
                className="btn-GenerateRandomNumber" 
                onClick={this.handleClickRandomNumberCard}>Generate Random Numbers</button>
              </div>
          </div>
        );
    }

}

export default RandomModule