import React,{useState, useEffect} from 'react';
import axios from 'axios'
import {Link} from "react-router-dom";

const AllNinjas = (props) => {
    

    const [allNinjas, setAllNinjas] = useState([])

    const [deleteToggle, setDeleteToggle] = useState(false)

    useEffect(()=>{
        axios.get("http://localhost:8000/api/ninjas")
        .then(response=>{
            console.log("response when getting all ninjas-->", response)
            setAllNinjas(response.data.results)
        })
        .catch(err=>console.log("errrrrr->", err))

    },[props.formSubmitted, deleteToggle])


    const deleteNinja = (idOfNinja)=>{
        console.log("deleting ninja with this is-->", idOfNinja)
        axios.delete(`http://localhost:8000/api/ninjas/delete/${idOfNinja}`)
            .then(response=>{
                console.log("response after deleting->",response)
                
                setDeleteToggle(!deleteToggle)

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
                                <img src={ninja.profilePicUrl} alt="picture of ninja" height= "200px" width = "200px" />
                                <p><button onClick= {(e)=>deleteNinja(ninja._id)} className="btn btn-danger mt-2">Delete {ninja.name}</button></p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default AllNinjas;