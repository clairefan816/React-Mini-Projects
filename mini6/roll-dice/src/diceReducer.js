import { INCREMENT, CLEAR_HISTORY } from './Const'
const initState = {
    sum: 3,
    rollHistory: []
};

export default function diceReducer(preState=initState, action){
    const { type, data } = action;
    switch (type){
        case INCREMENT:
            return {
                sum: preState.sum + data,
                rollHistory: [...preState.rollHistory, data]
            };
        case CLEAR_HISTORY:
            return {sum: 0, rollHistory: []};
        default:
            return preState
    }
}