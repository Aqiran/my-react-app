import './App.css';
import Navbar from './components/navbar';
import Login from './components/login';
import Home from './home';
import Engagements from './components/engagements'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/engagements">
            <Engagements />
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
