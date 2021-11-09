import React,{useState, useEffect} from 'react';
import axios from 'axios'

const AllNinjas = (props) => {

    const [allNinjas, setAllNinjas] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:8000/api/ninjas")
        .then(response=>{
            console.log("response when getting all ninjas-->", response)
            setAllNinjas(response.data.results)
        })
        .catch(err=>console.log("errrrrr->", err))

    },[props.formSubmitted])
    

    return (
        <div>
            <h1>Here are all the ninjas</h1>
            {
                allNinjas.map((ninja,i)=>{
                    return (
                        <div key = {i} className="card">
                            <div className="card-body">
                                <h4 className="card-title">{ninja.name}</h4>
                                <p className="card-text">
                                    Number of projects: {ninja.numProjects}
                                </p>
                                <img src={ninja.profilePicUrl} alt="picture of ninja" height= "200px" width = "200px" />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default AllNinjas;