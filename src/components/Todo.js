'use strict';

import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as Actions from './../redux/actions/TodoActions';

import {
  	StyleSheet,
  	Text,
  	TouchableOpacity,
  	View,
} from 'react-native';

class Todo extends Component {
	constructor(props) {
	  	super(props);
	
	  	this.state = {
	  		todo: null,
	  	};
	}
	componentDidMount() {
		this.setState({todo: this.props.todo});
	}

  	render() {
  		var {todo} = this.state;

  		if (!todo) {
  			return null; 
  		}

	    return (
	      	<View style={{ flex: 1, flexDirection: 'row', padding: 10, backgroundColor: '#fff', marginVertical: 5}}>
      			<View style={{ flex: 5, justifyContent:'space-around', padding: 5  }}>
      				<Text>{todo.title}</Text>
	      			<TouchableOpacity
	      				onPress={() => this.props.toggleTodoItem(todo)}
	      				> 
	      				{todo.completed ? 
	      				<Text style={{ textDecorationLine: 'line-through', color: 'green' }}>Completed</Text>
	      				:
	      				<Text style={{ color: 'red' }}>Not completed</Text>
	      				}
	      			</TouchableOpacity>
      			</View>
      			<View style={{ flex: 1 }}>
	      			<TouchableOpacity 
	      				onPress={ () => this.props.deleteTodoItem(todo) }
	      				style={{ height: '100%', justifyContent: 'center', backgroundColor: '#eb4d4b', alignItems: 'center'  }}>
	      				<Text style={{ paddingVertical: 10, color: 'white' }}>X</Text>
	      			</TouchableOpacity>
      			</View>
      		</View>
	    );
  	}
}

function mapStateToProps(state) {
	return {
		todos: state.todos,
		loadingTodos: state.loadingTodos,
	}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);