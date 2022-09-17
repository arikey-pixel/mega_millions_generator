import './App.css';
import NumberList from './Components/Cards/NumberList';
import Header from './Components/Header/Header';

// App: The main component that handles all components for application.
function App () {
    return(
      <div className="App">
        <Header/>
        <NumberList/>
      </div>
    );
  }

export default App;
