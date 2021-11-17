import React, {useState} from 'react';
import './App.css';
import AllNinjas from './components/AllNinjas';
import NewNinjaForm from './components/NewNinjaForm';
import NinjaDetail from './components/NinjaDetail';
import EditNinjaForm from './components/EditNinjaForm';

import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  
  const [formSubmitted, setFormSubmitted] = useState(false) //we had this variable for the use case when the form is in the same route as the all ninjas, so that when the form submits, the formsubmitted variable changes, and when the fromsubmitted variable changes, the all ninjas component re-runs the axios to get all the ninjas which has one new ninja included in it
  return (
    // browserrouter tells us we can do routing 
    <BrowserRouter> 
      <div className="App container">
        <h1>Hello Ninjas Belt Reviewer</h1>
        <Link to="/" className= "btn btn-primary">Home</Link>
        <Link to="/new" className= "btn btn-secondary">Create new ninja</Link> | 
        
        <Switch> {/* Anything inside switch means it will only show components at specific routes. Anything outside of switch will show in all the routes  */}
          <Route exact path = "/">
            <AllNinjas formSubmitted = {formSubmitted}></AllNinjas>
          </Route>
          <Route exact path = "/new">
            <NewNinjaForm formSubmitted = {formSubmitted} setFormSubmitted= {setFormSubmitted}/>
          </Route>

          <Route exact path = "/ninja/:id"> {/* the :id is a route parameter and the ninjaDetail component can useParams() to extract the information in :id, which represents the id of the ninja we clicked on to see details of */}
            <NinjaDetail/>
          </Route>

          <Route exact path = "/edit/:id">
              <EditNinjaForm/>
          </Route>

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
