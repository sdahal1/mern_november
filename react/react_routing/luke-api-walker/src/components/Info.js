import React, {useState, useEffect} from 'react';
import { useParams } from "react-router";
import axios from 'axios'

const Info = () => {
    const { id, category } = useParams();
    const [info, setInfo] = useState({})

    useEffect(()=>{
        //make an api call to starwars api to search the category with an id
        axios.get(`https://swapi.dev/api/${category}/${id}`)
        .then(response=>{
            console.log(response)
            setInfo(response.data)
        })
        .catch(err=> console.log(err))

    }, [id,category]) //the id being in this dependency array is saying that the code inside of useEffect() will only run once upon the initial render of the component, and any other time that the variable id changes
    


    return (
        <div>
            {category == 'people'?
            <> 
                <h1>Showing info about person number: {id}</h1>
                <h1>{info.name}</h1>
                <p>Height: {info.height}</p>
                <p>Mass: {info.mass}</p>
            </>:category =='planets'?
            <>
                <h1>PLanet name: {info.name}</h1>
                <p>Climate: {info.climate}</p>
            </>:<h1>Its some other category</h1>
            
        }

        </div>
    );
};

export default Info;