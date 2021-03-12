import React, { Component } from 'react';
import { connect } from 'react-redux'
import { INCREMENT, CLEAR_HISTORY } from './Const'

class App extends Component{

  onIncreaseClick = (rollNumber) => {
    this.props.dispatch({type:INCREMENT, data: rollNumber})
  }

  onClearClick = () => {
      this.props.dispatch({type: CLEAR_HISTORY})
  }
  render(){
    let rollNumber = Math.floor(Math.random() * Math.floor(6))+1;
    const { sum, rollHistory, onIncreaseClick, onClearClick} = this.props;
    //console.log(this.props)
    return(
      <div className="App">
        <div>
          <button onClick={()=>this.onIncreaseClick(rollNumber)}>Roll Dice</button>
          <button onClick={this.onClearClick}>Clear Dice</button>
        </div>
        <div>The sum is {sum}</div>
        <div>The rollNumber is  {rollNumber}</div>
        <div>
          {rollHistory && rollHistory.map((score, index) => {return <div key={index}>{score}</div>})}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    sum: state.sum,
    rollHistory: state.rollHistory
  }
}

export default connect(mapStateToProps)(App)
