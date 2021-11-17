import React,{useState, useEffect} from 'react';
import axios from 'axios'
import {Link} from "react-router-dom";

const AllNinjas = (props) => {
    

    const [allNinjas, setAllNinjas] = useState([]) //initialize the allninjas as an array b/c we are expecting an array of ninja objects 

    const [deleteToggle, setDeleteToggle] = useState(false)

    //using useEffect to make it so that as soon as the component loads up, information about all the ninjas can be fetched by axios, and saved into our state variable without infinitely rerendering the page
    useEffect(()=>{
        axios.get("http://localhost:8000/api/ninjas") //making  a call to our backend route to get all 
        .then(response=>{
            console.log("response when getting all ninjas-->", response)
            setAllNinjas(response.data.results) //store the info about all the ninjas in our state variable
        })
        .catch(err=>console.log("errrrrr->", err))

    },[props.formSubmitted, deleteToggle]) //we want code inside the useEffect hook to re-run each time a new ninja is created or a ninja is deleted so that we have a new updated list of ninjas


    //this deleteNinja function runs when the delete button is clicked, and it is being passed the id of the ninja that we are trying to delete 
    const deleteNinja = (idOfNinja)=>{
        console.log("deleting ninja with this is-->", idOfNinja)
        //make an axios call to backend route to delete an object given an id
        axios.delete(`http://localhost:8000/api/ninjas/delete/${idOfNinja}`)
            .then(response=>{
                console.log("response after deleting->",response)

                setDeleteToggle(!deleteToggle) //each time something gets deleted, we change this variable called deleteToggle to be the opposite of what it currently is (true->false or vice versa), so that in the useEffect dependency array, it will trigger the axios call to happen again to get all the ninjas which has one less ninja in the list. This allows for the DOM (the content on the page) to update without us having to manually refresh to see the ninja be deleted

            })
            .catch(err=>console.log(err))
    }
    

    return (
        <div>
            <h1>Here are all the ninjas</h1>
            <div id="wrapper">
  
                        <span id="controlL" class="left-controls" role="button" aria-label="See Previous Modules">
                          <b class="fa fa-chevron-left fa-chevron-left-extra" aria-hidden="true"></b>
                        </span>
                        
                        <div class="title text-center h1">Module Selection Area</div>
                       
                        <div class="module-section clearfix">
                          {/* <button class="btn arrow-guides fa-chevron-left"></button> */}
                         <ul id="content">
                          {
                              allNinjas.map((ninja, i)=>{
                                  return(
                                    <li key={i} class="card effect1" style = {{backgroundImage: `url(${ninja.profilePicUrl})`, backgroundRepeat:'no-repeat', width: '250px'}}>
                                        
                                            <h4>{ninja.name}</h4>
                                            <p>Number of projects: {ninja.numProject}</p>
                                        {/* <img src={ninja.profilePicUrl} height = "100px" width= "100px"/> */}
                                        
                                    </li>

                                  )
                              })
                          }
                           
                          
                          
                         </ul>
                          
                         
                          
                        </div>
                        
                      <span id="controlR" class="right-controls" role="button" aria-label="See Previous Modules">
                          <b class="fa fa-chevron-right fa-chevron-right-extra" aria-hidden="true"></b>
                        </span>
                       {/* <button class="btn arrow-guides-right fa-chevron-right"></button> */}
                        
                        
                        
                      </div>
            
            
        </div>
    );
};

export default AllNinjas;