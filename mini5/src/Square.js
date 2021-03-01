import React, { Component } from 'react';
import './Square.css'

class Square extends Component{
    
    render(){
        const { status } = this.props
        const color = status ? "white" : "black"
        console.log(color);
        return (
            <span className="container" style={{backgroundColor:color}} onClick={this.props.colorHandler}></span>
        )
    }
}

export default Square;