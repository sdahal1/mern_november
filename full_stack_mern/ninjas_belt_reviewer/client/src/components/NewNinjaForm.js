import React, {useState} from 'react';
import axios from 'axios'
import { useHistory } from "react-router-dom";

const NewNinjaForm = (props) => {
    const history = useHistory() //using history to that we can redirect to "/" when the form submits

    //creating a variable to represent the information needed to create a new ninja on the form---its an Object which has keys that match the model and also the names of the inputs
    const [formInfo,setFormInfo] = useState({
        name:"",
        numProjects:"",
        gradDate:"",
        isVet:false,
        profilePicUrl:""
    })

    //to store the form validation errors we get back if form is filled out incomplete
    const [formErrors, setFormErrors] = useState({
        name:"",
        numProjects:"",
        gradDate:""
    })




    //changehandler to update the formInfo object with the information from the form as the form is being changed
    const changeHandler = (e)=>{
        console.log("changinn the form!")
        if(e.target.type==="checkbox"){ //if the input is a check box, update the state variable slightly differently
            setFormInfo({
                ...formInfo,
                [e.target.name]: !formInfo.isVet //toggle the checkbox to true-> false and vice versa
            })
        }else{
            setFormInfo({
                ...formInfo,
                [e.target.name]: e.target.value
            })
        }
    }


    //submithandler for when the form submits we send this date to backend to create something new
    const submitHandler = (e)=>{
        e.preventDefault()
        axios.post("http://localhost:8000/api/ninjas", formInfo)
            .then(response=>{
                console.log(response)
                
                if(response.data.err){ //if the form is not filled out properly and there are validation errors, collecct the validations errors and put them in a state variable using setFormErrors
                    setFormErrors(response.data.err.errors)
                }else{
                    props.setFormSubmitted(!props.formSubmitted) //this was needed when the form was in same page as all ninjas so that when form submits we can toggle this variable on and off to make so that all ninjas re-renders with the new list of ninjas. this is not needed when theform is on separate route from all ninjas
    

                    //this is to clear out the form upon form submission
                    setFormInfo({
                        name:"",
                        numProjects:"",
                        gradDate:"",
                        isVet:false,
                        profilePicUrl:""
                    })
                    //if theres any existing previous error messages, clear them out too
                    setFormErrors({
                        name:"",
                        numProjects:"",
                        gradDate:""
                    })

                    //redirect to "/" after creating a ninja
                    history.push("/")

                }

            })
            .catch(err=>console.log("error submitting the post request-->", err))

    }


    return (
        <div>
            <h3>Create new Ninja</h3>
            <form onSubmit= {submitHandler}>
                <div className="form-group">
                    <label htmlFor="">Name:</label>
                    <input onChange={changeHandler} type="text" name="name" id="" className="form-control" value= {formInfo.name} />
                    <p className="text-danger">{formErrors.name?.message}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="">Number of Projects:</label>
                    <input onChange={changeHandler} type="number" name="numProjects" id="" className="form-control" value= {formInfo.numProjects} />
                    <p className="text-danger">{formErrors.numProjects?.message}</p>

                </div>
                <div className="form-group">
                    <label htmlFor="">Graduation Date:</label>
                    <input onChange={changeHandler} type="date" name="gradDate" id="" className="form-control" value= {formInfo.gradDate} />
                    <p className="text-danger">{formErrors.gradDate?.message}</p>
                    
                </div>
                <div className="form-group">
                    <label htmlFor="">Profile Picture Link:</label>
                    <input onChange={changeHandler} type="text" name="profilePicUrl" id="" className="form-control" value= {formInfo.profilePicUrl} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Is Veteran?</label>
                    <input onChange={changeHandler} type="checkbox" name="isVet" id="" className="form-checkbox" value= {formInfo.isVet} />
                </div>
                <input type="submit" value="Create Ninja!" className="btn btn-success mt-3" />

            </form>
        </div>
    );
};

export default NewNinjaForm;