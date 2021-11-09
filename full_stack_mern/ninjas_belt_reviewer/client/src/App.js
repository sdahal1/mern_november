import React, {useState} from 'react';

import AllNinjas from './components/AllNinjas';
import NewNinjaForm from './components/NewNinjaForm';
import OneNinjaDetails from './components/OneNinjaDetails';
import {
  BrowserRouter,
  Switch,
  Route,
  Link 
} from "react-router-dom";

function App() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  return (
    <BrowserRouter>
      <div className="App container">
        <h1>Hello Ninjas Belt Reviewer</h1>
        <Link className= "btn btn-primary" to= "/">Home</Link>
        <Switch>
          <Route exact path= "/">
            <NewNinjaForm formSubmitted = {formSubmitted} setFormSubmitted= {setFormSubmitted}/>
            <hr />

            <AllNinjas formSubmitted = {formSubmitted}></AllNinjas>

          </Route>

          <Route exact path= "/ninjas/:id">
            <OneNinjaDetails></OneNinjaDetails>
          </Route>

          


        </Switch>
      </div>
    
    </BrowserRouter>
  );
}

export default App;
