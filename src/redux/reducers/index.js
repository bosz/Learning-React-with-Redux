import {combineReducers} from 'redux'; 

import todosReducer from './TodoReducers'; 

const rootReducer = combineReducers({
	todos: todosReducer
})

export default rootReducer;