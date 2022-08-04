import React, { Component} from 'react';
import './App.css';
import RandomNnumberCard from './RandomNnumberCard';

var card = new RandomNnumberCard();
const data = new Array().map((value, index) => ({
  id: index, body: value,
}));

// App: The main component that handles button clicks.
class App extends Component{
  constructor(){
    super()
    this.state ={
      cardNum: 1,
      number: [],
      data,
    }
    this.handleClickRandomNumberCard = this.handleClickRandomNumberCard.bind(this);
  }

  // onClearArray: Sets the length of data array to zero to empty the
  // array.
  onClearArray = () => {
    this.setState({
      data: data.length = 0,
    })
  }

  // TODO: Change the name of this variable as well as move it
  // copy: Generates all the nessary card to diplay on the application
  copy(){
    for(let i = 0; i < this.state.cardNum; i++){
     data.push({id: i + 1,body: card.generateRandomNumber()})
    }
    return data;
  }
  
  // handleClickRandomNumberCard: Sets the state value of number array
  // that is generated through the RandomNumberCard class.
  handleClickRandomNumberCard = () =>{
    this.onClearArray();
    this.setState({
      data: this.copy(),
    })
  }

  // changeCardNum: Sets state of CarNum variable when user inputs
  // a new number.
  changeCardNum(e){
    this.setState({
      cardNum: e.target.value,
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
            onChange={(e) => this.changeCardNum(e)}
            min="1" 
            placeholder="Type in here"/>
          <input
            className='btn-submit'
            type={"submit"} 
            value = "submit" 
            onClick={this.handleClickRandomNumberCard}/>
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
      </div>
    )
  }
}


export default App;
