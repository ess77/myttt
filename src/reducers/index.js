import { combineReducers } from 'redux';
import HistoryReducer from './history-reducer';
import { reducer as form } from 'redux-form'

const rootReducer = combineReducers({
    history: HistoryReducer,
    form
})

export default rootReducer