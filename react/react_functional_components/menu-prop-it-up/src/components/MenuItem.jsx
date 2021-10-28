import React, {useState} from 'react';

const MenuItem = (props)=>{

    let [price, setPrice] = useState(props.price)
    // let [anotherone, setAnotherone] = useState("Hello")

    let increasePrice = ()=>{
        //price +=1 //this does not work when trying to change a state variable. when changing a state variable, you have to use the 2nd word (setter)
        setPrice(price+1)
        // setAnotherone("Wazzzaaa")

        }

    return(
        <>
            <div>
                {/* <h1>{anotherone}</h1> */}
                <h1>{props.dishName}</h1>
                <p>Price: {price} + 20% tip</p>
                <p>Calories: {props.calories}</p>
                <p>Description: Its hot so watch your step</p>
                {props.children}
                <button onClick = {increasePrice}>Click me to increase the price of {props.dishName}</button>
            </div>
            <p>Note * Please ask server about allergy info**</p>
            <hr />
        </>
    )
}



export default MenuItem;
