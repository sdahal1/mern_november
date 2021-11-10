import React, {useState} from 'react';

import AllNinjas from './components/AllNinjas';
import NewNinjaForm from './components/NewNinjaForm';
import NinjaDetail from './components/NinjaDetail';

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
        <Link to="/" className= "btn btn-primary">Home</Link>
        
        <Switch>
          <Route exact path = "/">
            <NewNinjaForm formSubmitted = {formSubmitted} setFormSubmitted= {setFormSubmitted}/>
            <hr />

            <AllNinjas formSubmitted = {formSubmitted}></AllNinjas>
          </Route>

          <Route exact path = "/ninja/:id">
            <NinjaDetail/>
          </Route>

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
