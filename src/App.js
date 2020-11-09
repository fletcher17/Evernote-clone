import {Switch, Route} from 'react-router-dom';
import Navbar from './Components/Layout/Navbar';
import Home from './Components/Home/Home';
import './App.css';

function App() {
  return (
    <div className="App">
        <Navbar/>
      <Switch>
        <Route exact path='/' component={Home}/>
        
      </Switch>
    </div>
  );
}

export default App;