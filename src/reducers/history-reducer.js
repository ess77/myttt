export const CLICK = 'CLICK'
export const JUMP = 'JUMP'

const INIT_HISTORY = {
    SquaresHistory: [{
        Squares: Array(9).fill(null)
    }] ,
    Xturns: [true, false, false, false, false, false, false, false, false],
    StepNumber: 0,
    Winner: null
}

const HistoryReducer = (state = INIT_HISTORY, action) => {
    switch(action.type) {
        case CLICK : {
            console.log('HistoryReducer CLICK : ', action)
            const stepNum = state.StepNumber
            const xturn = state.Xturns[stepNum]
            const squares = state.SquaresHistory[stepNum].Squares.slice()
            squares[action.payload] = xturn===true?'X':'O'
            state.Winner = getWinner(squares)
            state.StepNumber = stepNum + 1
            state.SquaresHistory = state.SquaresHistory.concat({Squares: squares})
            state.Xturns[state.StepNumber] = !xturn
            state = {...state}
            break;
        }
        case JUMP : {
            console.log('HistoryReducer JUMP : ', action)
            const stepNum =  action.payload
            const squaresHistory = state.SquaresHistory.slice(0,stepNum + 1)
            state.Winner = (stepNum < state.StepNumber)?null:state.Winner
            state.StepNumber = stepNum
            state.SquaresHistory = squaresHistory
            state= {...state}

            break;
        }
        default : break;

    }
    return state
}

export default HistoryReducer

function getWinner(squares) {
    const winTab = [
       [0, 1, 2],
       [3, 4, 5],
       [6, 7, 8],
       [0, 4, 8],
       [2, 4, 6],
       [0, 3, 6],
       [1, 4, 7],
       [2, 5, 8],
     ]
   
     for(let i = 0; i < winTab.length; i++) {
       const [a, b, c] = winTab[i];
       if(squares[a]&&(squares[a]===squares[b])&&(squares[a]===squares[c])) {
         return squares[a];
       }
     }
   }