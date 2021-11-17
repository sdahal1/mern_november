import React, {useState} from 'react';
import axios from 'axios'
import { useHistory } from "react-router-dom";
import Form from './Form';

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
                
                if(response.data.err)
                { //if the form is not filled out properly and there are validation errors, collect the validations errors and put them in a state variable using setFormErrors
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
            <Form formInfo= {formInfo} changeHandler= {changeHandler} submitHandler= {submitHandler} buttonValue = {"Create Ninja!"}></Form>
        </div>
    );
};

export default NewNinjaForm;