let dataState = [];

const todosReducer = (state = dataState, action) => {
	switch(action.type){
		case 'FETCH_ALL_TODOS': 
			tmpState = Object.assign({}, state);
			tmpState = [...action.payload]
			return tmpState;

		case 'DELETE_TODO_ITEM': 
			var tmp_state = Object.assign([], state);
			new_state = tmp_state.filter(todo => {
				return todo.id != action.payload.id;
			})
			return new_state;
		case 'ADD_TODO_ITEM': 
			var tmp_state = Object.assign([], state);
			tmp_state.push(action.payload);
			return tmp_state;
		case 'TOGGLE_TODO_ITEM': 
			var tmp_state = Object.assign([], state);
			tmp_state.map(todo => {
				if (todo.id === action.payload.id) {
					todo.completed = todo.completed ? false : true;
				}
				return todo;
			})
			return tmp_state;
		default: 
			return state; 
	}
}

export default todosReducer;