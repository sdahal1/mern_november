import React, {useState, useEffect} from 'react';
import axios from 'axios';

const CoinsWithAxiosAndUseEffect = () => {
    //we want to get all the coins to load up on the page, WITHOUT having to press the buttong

    const [allCoins, setAllCoins] = useState([])
    const [count, setcount] = useState(0)
    
    console.log("count is", count)
    //useeffect is used when you want some code to run only in the initial render of the component and not anytime after. If I want some code to run only once upon the initial render of the component i'll put that code inside of useEffect
    useEffect(()=>{
        console.log("first line of code in useEffect")
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
        .then(response =>{
            console.log("response using axios!!! -->", response.data)
            setAllCoins(response.data) 
        })
        .catch(err=>{
            console.log(err)
        })

    },[]) //this dependency array is where i can tell useEffect when to run again whenever a variable inside the [] changes

    const increaseCount = ()=>{
        setcount(count+1)
    }

   
    console.log("component rendering---wazzzaaaaa")
    


    return (
        <div>
            <h3>Here are all the coins</h3>
            <button onClick = {increaseCount}>Increase Count</button>
            <p>The current count is: {count}</p>
            {
                allCoins.map((coin,i)=>{
                    return (
                        <div key = {i}>
                            <h3>{coin.name}</h3>
                            <p>Price: {coin.current_price}</p>
                            <img src={coin.image} alt="" height = "200px" width = "200px" />
                            <hr />
                        </div>
                    )
                })
            }
        </div>
    );
};

export default CoinsWithAxiosAndUseEffect;