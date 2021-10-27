import React, { Component } from 'react';

class MenuItem extends Component {
    render() {
        console.log("the props is this-->", this.props)
        return (
            <>
                <div>
                    <h1>{this.props.dishName}</h1>
                    <p>Price: {this.props.price} + 20% tip</p>
                    <p>Calories: {this.props.calories}</p>
                    <p>Description: Its hot so watch your step</p>
                    <hr />
                </div>
                <p>Note * Please ask server about allergy info**</p>
            </>
        )
    }
}
    
export default MenuItem;
