import React, { Component } from 'react';

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
          <button onClick={()=>onIncreaseClick(this.createRandom())}>Roll Dice</button>
          <button onClick={onClearClick}>Clear Dice</button>
        </div>
        <div>The sum is {sum}</div>
        <div>
          {rollHistory && rollHistory.map((score, index) => {return <div key={index}>{score}</div>})}
        </div>
      </div>
    )
  }
}


export default App
