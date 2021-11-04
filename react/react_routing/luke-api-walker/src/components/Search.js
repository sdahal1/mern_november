import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom'

const Search = () => {
    const [categories, setCategories] = useState([])
    const history = useHistory(); //useHistory is so we can do redirects to a new route when the form is submitted


    //this object will have keys that match the names of the inputs on the form i want to collect info from. this is to collect info from the form
    const [formInfo, setFormInfo] = useState({ 
        id:"",
        category: "people"
    })

    useEffect(()=>{
        axios.get("https://swapi.dev/api/")
            .then(response=>{
                console.log("logging response-->", response.data)
                let result = Object.keys(response.data) //result is an array containing all the categories
                console.log("RESULT IS THIS--->",result)
                setCategories(result)
            })
            .catch(err=>console.log(err))
    },[])


    //this is a change handler that will be run each time the form inputs info change. it will help to update the state variable formInfo to represent what is in the form 
    const changeHandler = (e)=>{
        console.log("changing inputs")
        //update the state variable containing the formInfo with the values from the inputs
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })

    }

    const submitHandler = (e)=>{
        e.preventDefault()
        console.log("submitteed with this info", formInfo )
        //make an api call to the starwars api with the info collected from the form-> AXIOS IS WHAT YOU USE TO MAKE AN API CALL!!!!!
        history.push(`/${formInfo.category}/${formInfo.id}`) //redirect to a new route


    }

    

    return (
        <div>
            <form onSubmit= {submitHandler} className= "d-flex">
                <div className="form-group">
                    <label htmlFor="">Search For</label>
                    <select onChange = {changeHandler} className="form-control" name="category" id="">
                        {
                           categories.map((cat, i)=>{
                                return(
                                    <option key = {i} value={cat}>{cat}</option>
                                )
                           })
                        }
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="id">ID:</label>
                    <input onChange= {changeHandler} className = "form-control" type="number" name="id" id="" />
                </div>
                <input type="submit" value="Search" className="btn-success btn-sm" />
            </form>
        </div>
    );
};

export default Search;