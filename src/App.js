import {Switch, Route} from 'react-router-dom';
import Navbar from './Components/Layout/Navbar';
import Home from './Components/Home/Home';
import Favorites from './Components/notes/Favorites';
import NoteDetail from './Components/notes/NoteDetail';
import './App.css';

function App() {
  return (
    <div className="App">
        <Navbar/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/favorites' component={Favorites}/>
        <Route path='/note/:id' component={NoteDetail}/>
      </Switch>
    </div>
  );
}

export default App;