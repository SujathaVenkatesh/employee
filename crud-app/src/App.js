// import logo from './logo.svg';
import './App.css';
import  Home from './components/Home';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>

        <Switch>
          <Route path='/'>
            <Home/>
            </Route>
            <Route path='/'>
            </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;