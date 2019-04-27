import React, { Component } from 'react';

import {
  	StyleSheet,
  	View,
  	TextInput, 
  	TouchableOpacity,
  	Text, 
  	Alert,
} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as Actions from './../redux/actions/TodoActions';

class NewTodo extends Component {
	constructor(props) {
	  	super(props);
	
	  	this.state = {
	  		text: '', 
	  	};
	}

	addTodoItem() {
		const {text} = this.state;
		if (text === '') {
			Alert.alert('Ouch, empty todo', 'Sorry, you have not provided any content to the todo. Provide a todo item before submitting the form'); 
			return false; 
		}
		let id = (this.props.todos).length + 1; 
		var todo = {
			userId: 1,
			id: id,
			title: text,
			completed: false
		}
		this.props.addTodoItem(todo);
		this.setState({text: ''});
	}

  	render() {
	    return (
	      	<View style={{ flex: 1, flexDirection: 'row', backgroundColor: '#ecf0f1' }}>
				<View style={{ flex: 7, justifyContent: 'center'}}>
					<TextInput 
						onChangeText={(text) => this.setState({text})}
        				value={this.state.text}
        				placeholder="Type a new todo item"
						style={{ borderWidth: 3, borderColor: '#95a5a6', color: '#2c3e50' }} 
						/>
				</View>
				<View style={{ flex: 2}}>
					<TouchableOpacity 
						onPress={ () => this.addTodoItem() }
						style={{ borderWidth: 3, borderColor: '#95a5a6', padding: 10, backgroundColor: '#7f8c8d', justifyContent: 'center', alignItems: 'center'  }}>
						<Text style={{ color: '#fff' }}>Add</Text>
					</TouchableOpacity>
				</View>
			</View>
	    );
  	}
}

function mapStateToProps(state) {
	return {
		todos: state.todos,
	}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NewTodo);