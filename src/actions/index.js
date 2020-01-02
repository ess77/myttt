import {CLICK} from '../reducers/history-reducer'
import {JUMP} from '../reducers/history-reducer'

export const click_function = function(indice) {
    console.log('click_function : ', indice)
    return ({
        type: CLICK,
        payload: indice
    });
}

export const jump_function = function(step) {
    return ({
        type: JUMP,
        payload: step
    });
}

