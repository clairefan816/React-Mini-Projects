import React, { Component } from 'react';
import Square from './Square';
import './Block.css'

class Block extends Component {
    constructor(props){
        super(props)
        this.state = {
            onSquare1: true,
            onSquare2: true,
            onSquare3: true,
            onSquare4: true,
            count: 0,
        }
    }

    colorHandler1 = () => {
        const onSquare1 = this.state.onSquare1;
        const curCount = this.state.count;
        const newCount = onSquare1 ? 1 : -1;
        this.setState({count: curCount + newCount});
        this.setState({onSquare1 : !onSquare1});
    }
    colorHandler2 = () => {
        const onSquare2 = this.state.onSquare2;
        
        const curCount = this.state.count;
        const newCount = onSquare2 ? 1 : -1;
        this.setState({count: curCount + newCount});

        this.setState({onSquare2 : !onSquare2});
    }
    colorHandler3 = () => {
        const onSquare3 = this.state.onSquare3;
        const curCount = this.state.count;
        const newCount = onSquare3 ? 1 : -1;
        this.setState({count: curCount + newCount});
        this.setState({onSquare3 : !onSquare3});
    }
    colorHandler4 = () => {
        const onSquare4 = this.state.onSquare4;
        const curCount = this.state.count;
        const newCount = onSquare4 ? 1 : -1;
        this.setState({count: curCount + newCount});
        this.setState({onSquare4 : !onSquare4});
    }


    render(){
        const {onSquare1, onSquare2, onSquare3, onSquare4} = this.state
        return(
        <div>
            <div className="count" style={{justifyContent:'center'}}>
                count: {this.state.count}
            </div>
            <div className="center">
                <div className="squareContainer">
                    <Square colorHandler={this.colorHandler1} status={this.state.onSquare1}/>
                    <Square colorHandler={this.colorHandler2} status={onSquare2}/>
                </div>
                <div className="squareContainer">
                    <Square colorHandler={this.colorHandler3} status={onSquare3}/>
                    <Square colorHandler={this.colorHandler4} status={onSquare4}/>
                </div>
            </div>
        </div>
        )
    }
}

export default Block;