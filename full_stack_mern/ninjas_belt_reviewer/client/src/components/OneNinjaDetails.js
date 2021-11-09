import React , {useEffect, useState} from 'react';
import { useParams } from "react-router";
import axios from 'axios'
import moment from 'moment'


const OneNinjaDetails = () => {
    const { id } = useParams();

    const [ninjaDetails, setNinjaDetails] = useState({})

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/ninjas/${id}`)
        .then(response=>{
            console.log("RESPONSE WHEN TRYING TO GET DETAILS ABOUT ONE NINJA-->", response)
            setNinjaDetails(response.data.results)
        })
        .catch(err=>console.log(err))
    },[])
    


    return (
        <div>
            <h3>Showing One ninja details below</h3>
            <p>Id of Ninja: {id}</p>
            <p>Name: {ninjaDetails.name}</p>
            <p>Number of projects: {ninjaDetails.numProjects}</p>
            <p>Graduation date: {moment(ninjaDetails.gradDate).format('MMMM Do YYYY')}</p>
            <p>Is Veteran: {ninjaDetails.isVet}</p>
            <p><img src={ninjaDetails.profilePicUrl} alt="Photo of ninja" height = "200px" width = "200px" /></p>
        </div>
    );
};



export default OneNinjaDetails;