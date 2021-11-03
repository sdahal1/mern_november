import React, {useState} from 'react';
import axios from 'axios';

const CoinsWithAxios = () => {

    const [allCoins, setAllCoins] = useState([])
    
    const getCoinInfo = ()=>{ //this function runs only when we press that button to get the coins
        console.log("trying to get the coins")
        //USING AXIOS IN THIS FILE INSTEAD TO SHOW ANOTHER WAY TO DO THE SAME THING WE DID WITH FETCH
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
            .then(response =>{
                console.log("response using axios!!! -->", response.data)
                setAllCoins(response.data)
            })
            .catch(err=>{
                console.log(err)
            })

        
        console.log("wazzzaaaaa") //similar to other tasks i can do while waiting for the package to arrive
    }


    return (
        <div>
            <h3>Here are all the coins</h3>
            <button onClick = {getCoinInfo}>Click to get all the coins</button>
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

export default CoinsWithAxios;