import React, {useState, useEffect} from 'react';
import axios from 'axios'
import { useParams } from "react-router";
import moment from 'moment'
import { useHistory } from "react-router-dom";
import Form from './Form'

const EditNinjaForm = (props) => {
    //in the edit component, it combines concepts from showing details about one ninjas and also creating a ninja
    //similar to details about one ninja b/c you will prepopulate the form with details about one ninja
    //similar to create ninja component b/c you will have a form with a change handler and a submit handeler
    //main difference is whent the form submits, you send a put request to update instead of create something new


    const history = useHistory()
    const { id } = useParams();

    //forminfo will be filled with info about the ninja we want to update so the page loads up with a pre-populated form
    const [formInfo,setFormInfo] = useState({
        name:"",
        numProjects:"",
        gradDate:"",
        isVet:false,
        profilePicUrl:""
    })

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/ninjas/${id}`)
            .then(response=>{
                console.log("response when getting ONE ninja-->", response)
                setFormInfo(response.data.results)
                
                
            })
            .catch(err=> console.log(err))
    },[])



    //changehandler to update the formInfo object with the information from the form as the form is being changed
    const changeHandler = (e)=>{
        console.log("changinn the form!")
        if(e.target.type==="checkbox"){
            setFormInfo({
                ...formInfo,
                [e.target.name]: !formInfo.isVet
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

        //when form is submitted, we make an axios call to our backend route to update something given an id and some data (forminfo) to update it with so it know which object to update using the id, and what info to update it with using the formInfo
        axios.put(`http://localhost:8000/api/ninjas/${id}`,formInfo)
            .then(response=>{
                console.log("response from the put request", response)
                history.push("/")
            })
            .catch(err=>console.log(err))

    }


    return (
        <div>
            <h3>Edit Ninja</h3>
            <Form changeHandler= {changeHandler} submitHandler= {submitHandler} formInfo = {formInfo} buttonValue = {"Update Ninja!"} ></Form>
        </div>
    );
};

export default EditNinjaForm;