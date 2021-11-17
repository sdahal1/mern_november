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
            {
                allNinjas.map((ninja,i)=>{
                    return (
                        <div key = {i} className="card">
                            <div className="card-body">
                                <h4 className="card-title"><Link to = {`/ninja/${ninja._id}`}>{ninja.name}</Link> </h4>
                                <p className="card-text">
                                    Number of projects: {ninja.numProjects}
                                </p>
                                <img src={`http://localhost:8000/${ninja.photo}`} alt="picture of ninja" height= "200px" width = "200px" />
                                <p><button onClick= {(e)=>deleteNinja(ninja._id)} className="btn btn-danger mt-2">Delete {ninja.name}</button> | <Link to= {`/edit/${ninja._id}`}  className="btn btn-info">Edit</Link></p> 
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default AllNinjas;