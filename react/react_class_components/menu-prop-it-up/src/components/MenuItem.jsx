import React, { Component } from 'react';

class MenuItem extends Component {
    constructor(props) {
        super(props);
        //a STATE variable is a variable in a react component that is allowed to cchange, and when it does change, the component reloads with the new updated changed info
        this.state = {
            price : this.props.price
        };

       
    }

    render() {
        console.log("the props is this-->", this.props)
        // let price = this.props.price


        let dosomething = ()=>{
            // console.log("brrrrrrrrr, its cold")
            // alert("oh feds money printer go brrrrrrrr")
            // console.log("changin the current price of", price)
            // price += 1
            //modify the state variable containing price
            this.setState({price: this.state.price +1})
            // console.log("NEW PRICE IS-->",price)

        }

        return (
            <>
                <div>
                    <h1>{this.props.dishName}</h1>
                    <p>Price: {this.state.price} + 20% tip</p>
                    <p>Calories: {this.props.calories}</p>
                    <p>Description: Its hot so watch your step</p>
                    {this.props.children}
                    <button onClick = {dosomething}>Click me to increase the price of {this.props.dishName}</button>
                </div>
                <p>Note * Please ask server about allergy info**</p>
                <hr />
            </>
        )
    }
}
    
export default MenuItem;
