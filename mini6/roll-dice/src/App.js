import React, { Component } from 'react';
import './App.css'

class App extends Component{


  createRandom = () => {
    return Math.floor(Math.random() * Math.floor(6))+1;
  }
  render(){
    const { sum, rollHistory } = this.props.dice;
    const { onIncreaseClick, onClearClick  } = this.props;
    // console.log(this.props.dice)
    return(
      <div className="App">
        <div>
          <button className="Buttons" onClick={()=>onIncreaseClick(this.createRandom())}>Roll Dice</button>
          <button className="Buttons" onClick={onClearClick}>Clear Dice</button>
        </div>
        <div className="Sum">The sum is {sum}</div>
        <div className="FlexContainer">
          {rollHistory && rollHistory.map((score, index) => {return <div className="Box" key={index}><span className="Score">{score}</span></div>})}
        </div>
      </div>
    )
  }
}


export default App
