import React, { Component } from 'react'


class IncrementDecrement extends Component{
    constructor(props){
        super(props);
    this.state = {
        num: props.number
    }

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    }

    increment = () => {
        let i = this.state.num + 1;
        this.setState({num: i});

    } 
    decrement = () => {
        if (this.state.num === 0){
            alert("Number cannot be less than zero");
        }
        else {
            let i = this.state.num - 1;
            this.setState({num: i});
        }
    }

    render(){
        return (
            <div className="IncreaseDecrease">
                <button onClick={this.increment}>Increment</button>
                <p>{this.state.num}</p>
                <button onClick={this.decrement}>Decrement</button>
            </div>
        )
    }
}

export default IncrementDecrement;