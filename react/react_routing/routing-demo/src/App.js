import React from "react";
import {
  BrowserRouter, //this will enable routing features in our application
  Link,  //this is just like an anchor tag, except it does not reload the whole page when it takes you to a new route
  Route,
  Switch
} from "react-router-dom";

import About from './components/About';
import Joke from "./components/Joke";
import User from "./components/User";
import Survey from "./components/Survey";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <h1>Welcome to routing. Choose the route you want!</h1>
        <p><Link to="/home">Home</Link> | <Link to="/about">About</Link> | <Link to="/funny">Show me a joke</Link> | <Link to ="/survey">Fill out the survey</Link></p>
       {/* anything in between the switch tags are the components that I want to switch between for the diferent routes. Anything outside of the switch tags will show in ALL the routes */}
        <Switch>
            <Route exact path = "/home">
              <h1>Welcome home</h1>
              <h3>This is really home tho</h3>
            </Route>
            <Route exact path = "/about">
                <About></About>
            </Route>
            <Route exact path = "/funny">
                <Joke></Joke>
            </Route>

            {/* routing with parameters */}
            <Route exact path = "/users/:id/:color">
                <User></User>
            </Route>


            {/* useHistory example with survey  */}
            <Route exact path = "/survey">
              <Survey></Survey>
            </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
