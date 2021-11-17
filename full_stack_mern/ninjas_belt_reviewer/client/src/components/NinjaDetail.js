import React, {useState, useEffect} from 'react';
import { useParams } from "react-router";
import axios from 'axios'
import moment from 'moment'
import { useHistory } from "react-router-dom";

const NinjaDetail = () => {
    const { id } = useParams(); //get the id of the ninja from the route and put it in a variable
    const history = useHistory(); //so we can redirect after clicking on delete

    const [ninjaInfo, setNinjaInfo] = useState({}) //a state variable to store information about the ninja that we get back from the api   

    //as soon as the Ninja Detail component renders, make an api call to get one ninja by id, and store that ninja info in a state variable without infinitely re-rendering this component
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/ninjas/${id}`)
            .then(response=>{
                console.log("response when getting ONE ninja-->", response)
                setNinjaInfo(response.data.results)
                
                
            })
            .catch(err=> console.log(err))

    },[])


    const deleteNinja = ()=>{
        console.log("deleting ninja that has this is-->", id)
        axios.delete(`http://localhost:8000/api/ninjas/delete/${id}`) //make an axios call to our backend route to delete ninja by id. wehave this id available from the route parameter
            .then(response=>{
                console.log("response after deleting->",response)
                history.push("/") //redirect to "/" after deleting the ninja

            })
            .catch(err=>console.log(err))
    }


    return (
        <div>
            <h1>Details about ninja below!</h1>
            <p>Id of ninja: {id}</p>
            <p>Name: {ninjaInfo.name}</p>
            <p># of Projects: {ninjaInfo.numProjects}</p>

            {/* graduation date is being formatted to look pretty using moment.js library */}
            <p>Graduation Date: {moment(ninjaInfo.gradDate).format('MMMM Do, YYYY')  }  </p>
            <p>Veteran: {ninjaInfo.isVet? "Is Veteran": "Not a veteran"}</p>
            <p>Profile picture: <img src={`http://localhost:8000/${ninjaInfo.photo}`} alt="Picture of one Ninja" height="200px" width= "200px"/> </p>

            <button onClick= {deleteNinja} className="btn btn-danger">Delete {ninjaInfo.name} </button>

        </div>
    );
};


export default NinjaDetail;