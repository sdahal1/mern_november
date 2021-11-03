import React from 'react';
import { useParams } from "react-router";


const User = () => {
    const {id,color} = useParams();

    console.log(isNaN(id))

    return (
        <div style = {{backgroundColor: color}}>
            {
              isNaN(id)?
              <h2>Information about one user. This users name is: {id}</h2> :
              <h2>Information about one user. This users id is: {id}</h2>

            }
            <p>Favorite color: {color}</p>
        </div>
    );
};


export default User;