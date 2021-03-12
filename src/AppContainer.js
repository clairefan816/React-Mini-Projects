import { connect } from "react-redux";
import { connect } from 'react-redux'

function mapStateToProps(state){
    return {
      sum: state.sum,
      rollHistory: state.rollHistory
    }
}

function mapDispatchToProps(state, props){
    return {
        onIncreaseClick : (rollNumber) => {
            this.props.dispatch({type:INCREMENT, data: rollNumber})
          },
        onClearClick : () => {
            this.props.dispatch({type: CLEAR_HISTORY})
        }
    }
}
// export default connect(mapStateToProps, mapDispatchToProps)(App)