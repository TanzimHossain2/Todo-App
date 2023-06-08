import { combineReducers } from "redux";
import filterreducer from './filterSection/filterreducer.js';
import todoreducer  from './todoSection/reducer.js';


const rootReducer = combineReducers({
    filter: filterreducer,
    todos: todoreducer
})

export default rootReducer;


