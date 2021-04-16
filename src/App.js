import './App.css';
import Navbar from './components/navbar';
import Login from './components/login';
import Home from './home';
import Engagements from './engagements'
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
          <Route exact path="/Home">
            <Home />
          </Route>
          <Route exact path="/Engagements">
            <Engagements />
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
