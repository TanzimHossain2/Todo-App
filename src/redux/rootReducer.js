import filterReducer from './filters/filterReducer';
import todosReducer from './todos/todosReducer';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    todos: todosReducer,
    filters: filterReducer,
});

export default rootReducer;