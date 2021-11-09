import React, {useState} from 'react';
import axios from 'axios'

const NewNinjaForm = () => {

    const [formInfo,setFormInfo] = useState({
        name:"",
        numProjects:"",
        gradDate:"",
        isVet:false,
        profilePicUrl:""
    })


    //changehandler to update the formInfo object with the information from the form as the form is being changed
    const changeHandler = (e)=>{
        console.log("changinn the form!")
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })
    }


    //submithandler for when the form submits we send this date to backend to create something new
    const submitHandler = (e)=>{
        e.preventDefault()
        axios.post("http://localhost:8000/api/ninjas", formInfo)
            .then(response=>{
                console.log(response)
            })
            .catch(err=>console.log("error submitting the post request-->", err))

    }


    return (
        <div>
            <form onSubmit= {submitHandler}>
                <div className="form-group">
                    <label htmlFor="">Name:</label>
                    <input onChange={changeHandler} type="text" name="name" id="" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Number of Projects:</label>
                    <input onChange={changeHandler} type="number" name="numProjects" id="" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Graduation Date:</label>
                    <input onChange={changeHandler} type="date" name="gradDate" id="" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Profile Picture Link:</label>
                    <input onChange={changeHandler} type="text" name="profilePicUrl" id="" className="form-control" />
                </div>
                <input type="submit" value="Create Ninja!" className="btn btn-success mt-3" />

            </form>
        </div>
    );
};

export default NewNinjaForm;