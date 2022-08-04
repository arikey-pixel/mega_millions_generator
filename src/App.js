import React, { Component} from 'react';
import './App.css';
import RandomNnumberCard from './RandomNnumberCard';

var card = new RandomNnumberCard();

// App: The main component that handles button clicks.
class App extends Component{
  constructor(){
    super()
    this.state ={
      cardNum: "",
      number:[],
    }
    //this.numberOfCards = this.numberOfCards.bind(this);
    //this.changeCardNum = this.changeCardNum.bind(this);
    this.handleClickRandomNumberCard = this.handleClickRandomNumberCard.bind(this);
  }

  // handleClickRandomNumberCard: Sets the state value of number array
  // that is generated through the RandomNumberCard class
  handleClickRandomNumberCard = () =>{
    this.setState({
      number: card.generateRandomNumber(),
    })
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
            <div>
              <RandomNnumberCard number={this.state.number}/>
            <button 
              className="btn-GenerateRandomNumber" 
              onClick={this.handleClickRandomNumberCard}>Generate Random Numbers</button>
            </div>
      </div>
      </div>
    )
  }
}


export default App;
