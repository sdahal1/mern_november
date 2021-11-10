import React, {useState, useEffect} from 'react';
import { useParams } from "react-router";
import axios from 'axios'
import moment from 'moment'
import { useHistory } from "react-router-dom";

const NinjaDetail = () => {
    const { id } = useParams();
    const history = useHistory();

    const [ninjaInfo, setNinjaInfo] = useState({})    

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
        axios.delete(`http://localhost:8000/api/ninjas/delete/${id}`)
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
            <p>Graduation Date: {moment(ninjaInfo.gradDate).format('MMMM Do, YYYY')  }  </p>
            <p>Veteran: {ninjaInfo.isVet? "Is Veteran": "Not a veteran"}</p>
            <p>Profile picture: <img src={ninjaInfo.profilePicUrl} alt="Picture of one Ninja" height="200px" width= "200px"/> </p>

            <button onClick= {deleteNinja} className="btn btn-danger">Delete {ninjaInfo.name} </button>

        </div>
    );
};


export default NinjaDetail;