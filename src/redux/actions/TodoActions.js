import TODOS from './../../res/todos.json';

export function fetchTodoData() {
	return (dispatch) => {

		dispatch ({type: 'FETCH_ALL_TODOS', payload: TODOS});

		/*fetch('http://jsonplaceholder.typicode.com/todos')
		   .then((response) => response.json())
		    .then((responseJson) => {
		    	dispatch ({type: 'FETCH_ALL_TODOS', payload: responseJson})
		    })
		    .catch((error) => {
		    	const {message} = error;
		      	alert('Failed loading todos with error ', message);
		    	dispatch ({type: 'FETCH_ALL_TODOS', payload: []})
		    });*/
	}
}

export function deleteTodoItem(todo) {
	return (dispatch) => {
		dispatch({type: 'DELETE_TODO_ITEM', payload: todo});
	}
}

export function addTodoItem(todo) {
	return (dispatch) => {
		dispatch({type: 'ADD_TODO_ITEM', payload: todo});
	}
}

export function toggleTodoItem(todo) {
	return (dispatch) => {
		dispatch({type: 'TOGGLE_TODO_ITEM', payload: todo});
	}
}