import React, {useState} from 'react';

import AllNinjas from './components/AllNinjas';
import NewNinjaForm from './components/NewNinjaForm';

function App() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  return (
    <div className="App container">
      <h1>Hello Ninjas Belt Reviewer</h1>
      <NewNinjaForm formSubmitted = {formSubmitted} setFormSubmitted= {setFormSubmitted}/>
      <hr />

      <AllNinjas formSubmitted = {formSubmitted}></AllNinjas>
    </div>
  );
}

export default App;
