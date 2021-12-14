import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/HomeComp/HomeComp';
import CartComp from './components/CartComp/CartComp';
import NavComp from './components/NavComp/NavComp';

function App() {
  return (
    <div className="App">
      <Router>
      <NavComp />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path ="/cart" component={CartComp} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
