import { ADDED, ALLCOMPLEtE, CLEARCOMPLETE, COLORSELECTED, REMOVED, TOGGLED } from "./actionTypes";
import { initialState } from "./initialState";

const nextId = (todos) => {
    const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1)
    return maxId + 1
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case ADDED: {
            return [
                ...state,
                {
                    id: nextId(state),
                    text: action.payload,
                    completed: false

                }
            ]
        }

        case TOGGLED: {
            return state.map(todo => {
                if (todo.id !== action.payload) {
                    return todo
                }
                return {
                    ...todo,
                    completed: !todo.completed
                }
            })
        }

        case REMOVED: {
            return state.filter(todo => todo.id !== action.payload)
        }

        case COLORSELECTED: {
            return state.map(todo => {
                if (todo.id !== action.payload.todoId) {
                    return todo
                }
                return {
                    ...todo,
                    color: action.payload.color
                }
            })
        }

        case ALLCOMPLEtE: {
            return state.map(todo => {
                return {
                    ...todo,
                    completed: true
                }
            })
        }

        case CLEARCOMPLETE: {
            return state.filter(todo => !todo.completed)
        }

        default:
            return state
    }
}

export default reducer