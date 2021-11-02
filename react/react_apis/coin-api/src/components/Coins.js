import React, {useState} from 'react';

const Coins = () => {

    const [allCoins, setAllCoins] = useState([])
    
    const getCoinInfo = ()=>{
        console.log("trying to get the coins")
        //fetch is used to make an api call to the route inside of fetch() and then when it gets back the data, the .then() functions will run
        fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false") //similar to waiting for an amazon package you have to sign off for
          .then((response) => {
            return response.json(); //format it into valid json incase it is not already valid json
        }).then(response => {
            //these lines in this block of code will execute only after the response from the api arives
            console.log("response iss->", response); //similar to signing of the package when it arrives
            //put the info from response into our state variable so we can access it outside of the .then()
            setAllCoins(response)

        }).catch(err=>{
            console.log(err);
        });

        
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

export default Coins;