import React from 'react';
import {Route, Switch, Link} from 'react-router-dom'
import './App.css';
import HomePage from'./components/homepage.component'

const HatsPage =()=>(
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

function App() {
  return (
    <div>
    <Switch>
      <Route exact path='/' component={HomePage}></Route>
      <Route path='/hats' component={HatsPage}></Route>
    </Switch>
    </div>
  );
}

export default App;
