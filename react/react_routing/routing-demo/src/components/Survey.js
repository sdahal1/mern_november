import React, { useState } from "react";
import { useHistory } from "react-router-dom"; //step 1: import useHistory from react-router-dom
    
const Survey = (props) => {
  const history = useHistory(); //step 2: create a variable that is = to useHistory()


  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  
  const sendSurvey = (e) => {
    e.preventDefault();
    // do something with the data

    //step 3 --> use the history variable to redirect to a new route
    history.push("/funny")

    

  }
    
  return (
    <form onSubmit={ sendSurvey }>
      <label>Your Name:</label>
      <input type="text" onChange={ (e) => setName(e.target.value) } value={ name } />
      <label>Your Comment:</label>
      <textarea onChange={ (e) => setComment(e.target.value) } value={ comment }></textarea>
      <input type="submit" value="Submit Survey" />
    </form>
  );
}

export default Survey;