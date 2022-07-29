import React, { Component, useState } from 'react';
import './App.css';
//import "bootstrap/dist/css/bootstrap.min.css"

// What is Component?
//A:Let's you create text boxes and such

// What is super?
//A: Call the parent object

// What is this.state?
//A: The default object
var counter = -1;
class App extends Component{
  constructor(){
    super()
    // This is like the first object that will be later changed
    /*this.state = {
      userName: '',
      password: '',
    }
    */
    this.state ={
      number: [], 
      cardNum: "",
    }

    this.generateRandomNumber = this.generateRandomNumber.bind(this);
    this.addNumber = this.addNumber.bind(this);
    this.numberOfCards = this.numberOfCards.bind(this);
    this.changeCardNum = this.changeCardNum.bind(this);
  }

  userInput(defaultValue){
    //this.state = {value: defaultValue};
  }
  // Adds a number at the end of the array of numbers
  addNumber(){
    var addRandom = Math.floor((Math.random()* 25 ) + 1);
    if(counter == 0){
      this.setState({
        number: this.state.number.concat(" " + addRandom)
      })
      counter += 1
    }
  }

  // Creats the array of random numbers
  copyArray(){
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
    
    return copy;
  }

  // Gets the array of random numbers.
  generateRandomNumber(){
    //var number = this.copyArray().join(' ');
    //this.setState({number})
      this.setState({
        number: this.copyArray().join(' '),
      })
      counter = 0;
  }

  numberOfCards(){
    for(let i = 0; i < this.state.cardNum; i++){
       this.generateRandomNumber();
    }
  }

  changeCardNum(e){
    let cardNum = e.target.value;
    this.setState({
      cardNum:cardNum
    })
  }
/*
  changeUserName(event){
    this.setState({
      userName:event.target.value
    })
  }

  changePassword(event){
    this.setState({
      password:event.target.value
    })
  }
*/
  render(){
    return(
      <div className="App">
        <div className="cointainer">
          <h1 className= "Lottery-Header">Lottery Number Generator</h1>
          <h3 className="Question-Header">How Many cards are you playing?</h3>
          <input 
            type={'number'} 
            onChange={this.changeCardNum}
            min="1" 
            value={this.state.cardNum} 
            placeholder="Type in here"/>
          <input
          className='btn-submit'
            type={"submit"} 
            value = "submit" 
            onClick={this.numberOfCards}/>
          <h2>{this.state.number}</h2>
        <button 
          className="btn-RandomNumber" 
          onClick={this.generateRandomNumber}>Random Number</button>
        <button 
          className='btn-addNumber'
          onClick={this.addNumber}>Add Multiplier Number</button>
      </div>
      </div>

      /*
      <div>
        <div className='container'>
          <div className='form-div'>
            <form>
              <input type={'text'}
              placeholder='UserName'
              onChange={this.changeUserName}
              value = {this.state.userName}
              className='form-control form-group'
              />

              <input type={'text'}
              placeholder='Password'
              onChange={this.changePassword}
              value ={this.state.password}
              className='form-control form-group'
              />

              <input type={'submit'} className='btn btn-danger btn-block' value={'Submit'}/>
            </form>
          </div>
        </div>
      </div>
      */
    )
  }
}


export default App;
