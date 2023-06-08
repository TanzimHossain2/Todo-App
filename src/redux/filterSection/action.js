import {COLORCHANGED,STATUSCHANGED} from './actionType';

const colorChanged = (color, changeType) =>{
    return {
        type: COLORCHANGED,
        payload: {color, changeType}
    }
}

const statusChanged = (status) =>{
    return {
        type: STATUSCHANGED,
        payload: status
    }
}

export {colorChanged, statusChanged}