import React, {useState} from 'react';
import styles from './PetForm.module.css';

const PetForm = (props)=>{
    //create a state variable for each input in the form
    let [name,setName] = useState("") //step 1- create state variable
    let [picurl, setPicurl] = useState("")
    let [date, setDate] = useState("")
    let [service, setService] = useState("")



    return(
        <>
            <form className = {styles.petAppointmentForm} >
                <div className="form-group">
                    <label htmlFor="">Name:</label>
                    <input onChange= {(e)=>{setName(e.target.value)}} type="text" name="name" id="" className="form-control" /> 
                    {
                        name.length<3 && name.length >0?
                            <p className= "text-danger">Name must be at least 3 characters</p>
                        : <p>  </p>
                    }
                    {/* step 2-> create the onChange event listener to update the input */}
                </div> 
                <div className="form-group">
                    <label htmlFor="">Picture:</label>
                    <input onChange = {(e)=>{setPicurl(e.target.value)}} type="text" name="" id="" className="form-control" />
                    {
                        picurl.length<1 ?
                            <p className= "text-danger">Needz da pic</p>
                        : ""
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="">Date of Appointment:</label>
                    <input onChange = {(event)=>{setDate(event.target.value)}} type="date" name="" id="" className="form-control" />
                    {
                        date.length<1 ?
                            <p className= "text-danger">Need the date</p>
                        : ""
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="">Please choose a service</label>
                    <select onChange= {(e)=>{setService(e.target.value)}} name="" id="" className= "form-select">
                        <option hidden value="">PLEASE SELECT ONE</option>
                        <option value="Level 1- Just basic grooming">Level 1- Just basic grooming</option>
                        <option value="Level 2- Just basic grooming + walk">Level 2- Just basic grooming + walk</option>
                        <option value="Level 3- We make a shrine and pray to your pet">Level 3- We make a shrine and pray to your pet</option>
                    </select>
                    {
                        service.length<1 ?
                            <p className= "text-danger">Please choose a service</p>
                        : ""
                    }
                    <input type="submit" value="Make Appointment!" className="btn btn-success mt-3" />
                </div>
            </form>
            <div>
                <p>Name: {name} </p> 
                {/* step 3- display the state variable at the bottom of page */}
                <p>Pic url: <img src={picurl} alt="" width = "200px" height = "200px" /></p>
                <p>Date of Appointment: {date}</p>
                <p>Service type: {service}</p>
            </div>
        </>

    )
}


export default PetForm;