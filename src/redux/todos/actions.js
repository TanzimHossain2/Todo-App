import { ADDED,ALLCOMPLEtE,CLEARCOMPLETE,COLORSELECTED,REMOVED,TOGGLED } from "./actionTypes"

export const added = (todoText)=>{
    return{
        type: ADDED,
        payload: todoText
    }
}

export const toggled = (todoId)=>{
    return{
        type: TOGGLED,
        payload: todoId
    }
}

export const removed = (todoId)=>{
    return{
        type: REMOVED,
        payload: todoId
    }
}

export const colorSelected = (todoId,color)=>{
    return{
        type: COLORSELECTED,
        payload: {todoId,color}
    }
}

export const allCompleted = ()=>{
    return{
        type: ALLCOMPLEtE
    }
}

export const clearCompleted = ()=>{
    return{
        type: CLEARCOMPLETE
    }
}
