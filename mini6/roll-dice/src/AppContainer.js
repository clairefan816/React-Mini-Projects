import {connect} from "react-redux";
import { INCREMENT, CLEAR_HISTORY } from './Const'
import App from './App'

function mapStateToProps(state){
    return {
    //   sum: state.sum,
    //   rollHistory: state.rollHistory
        dice: state.incre_decre
    }
}

function mapDispatchToProps(dispatch, props){
    return {
        onIncreaseClick:(rollNumber) => {
            dispatch({type:INCREMENT, data: rollNumber})
          },
        onClearClick : () => {
            dispatch({type: CLEAR_HISTORY})
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)