import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/HomeComp/HomeComp';
import CartComp from './components/CartComp/CartComp';

function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path ="/cart" component={CartComp} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
