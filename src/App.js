import React, { Component} from 'react';
import './App.css';
import Components from './Components/Cards/NumberList';

// TODO: Create a Header Component
// App: The main component that handles all components for application.
class App extends Component{

  render(){
    return(
      <div className="App">
        <div className="cointainer">
          <h1 className= "Lottery-Header">Lottery Number Generator</h1>
          <h3 className="Question-Header">How Many cards are you playing?</h3>
      </div>
      <Components/>
      </div>
    )
  }
}


export default App;
