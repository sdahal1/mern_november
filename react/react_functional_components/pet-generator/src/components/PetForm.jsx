import React, {useState} from 'react';
import styles from './PetForm.module.css'

const PetForm = () => {

    let [formInfo, setFormInfo] = useState({
        name: "",
        picurl: "",
        date: "",
        service: "",
        favColor: ""
    })

    let [listofPets, setListofPets] = useState([])


    const changehandler = (e)=>{
        console.log("typing in this input-->", e.target.name, e.target.value )
        //this is updating the formInfo state variable. Since the formInfo variable is an object, we use {} 
        setFormInfo({ 
            ...formInfo, //this is saying make a copy of the formInfo variable with all its existing key value pairs
            [e.target.name]: e.target.value //update the key-value pair that corresponds to the input that is being changed. the e.target.name will be whatever the name of the input is
        })
    }

    const submitPet = (e)=>{
        e.preventDefault() //this will prevent the form submission from reloading the page
        console.log("submitted the appointment!")
        //push the formInfo object into my array called list of pets when the form is submitted
        setListofPets([...listofPets, formInfo])
        


    }


    return (
        <div className= "container">
            <form id = {styles.petAppointmentForm} onSubmit= {submitPet}>
                <div className="form-group">
                    <label htmlFor="">Name:</label>
                    <input onChange= {changehandler} type="text" name="name" id="" className="form-control" /> 
                    
                    {/* step 2-> create the onChange event listener to update the input */}
                </div> 
                <div className="form-group">
                    <label htmlFor="">Picture:</label>
                    <input onChange = {changehandler} type="text" name="picurl" id="" className="form-control" />
                    
                </div>
                <div className="form-group">
                    <label htmlFor="">Date of Appointment:</label>
                    <input onChange = {changehandler} type="date" name="date" id="" className="form-control" />
                   
                </div>
                <div className="form-group">
                    <label htmlFor="">Favorite color:</label>
                    <input onChange = {changehandler} type="text" name="favColor" id="" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Please choose a service</label>
                    <select onChange= {changehandler} name="service" id="" className= "form-select">
                        <option hidden value="">PLEASE SELECT ONE</option>
                        <option value="Level 1- Just basic grooming">Level 1- Just basic grooming</option>
                        <option value="Level 2- Just basic grooming + walk">Level 2- Just basic grooming + walk</option>
                        <option value="Level 3- We make a shrine and pray to your pet">Level 3- We make a shrine and pray to your pet</option>
                    </select>
                    
                    <input type="submit" value="Make Appointment!" className="btn btn-success mt-3" />
                </div>
            </form>
            <hr />
            <h3>All the appointments so far</h3>
            {/* {% for pet in listofpets %}
                <div>
                    Name: {{pet.name}}
                </div>
            {% endfor %} */}

            {
                listofPets.map((pet)=>{
                    return(
                    <div style = {{backgroundColor: pet.favColor}} className= {styles.pet}>
                        <p>Name: {pet.name}</p>
                        <p>Appointment date: {pet.date}</p>
                        <p>Service: {pet.service}</p>
                        <p>Favorite Color: {pet.favColor}</p>
                        <p><img src={pet.picurl} alt="pet image here" height = "200px" width = "200px"/></p>
                        <hr />
                    </div>
                    )
                })
            }
        </div>
    );
};

export default PetForm;