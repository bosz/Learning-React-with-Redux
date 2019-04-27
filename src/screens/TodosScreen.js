import React, { Component } from 'react';

import {
	ScrollView,
  	StyleSheet,
  	View,
  	Text, 
  	TouchableOpacity,
  	FlatList,
  	TextInput,
  	ActivityIndicator,
  	ImageBackground,
} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Todo from './../components/Todo';
import NewTodo from './../components/NewTodo';

import * as Actions from './../redux/actions/TodoActions';

class TodosScreen extends Component {
	constructor(props) {
	  	super(props);
	}

	componentDidMount() {
		this.props.fetchTodoData(); 
	}

  	render() {
  		const {headerStyle, footerStyle} = styles; 
  		let todos = this.props.todos;
  		let loadingTodos = this.props.loadingTodos;
		return (
			<ImageBackground 
				style={{ width: '100%', height: '100%' }}
        		source={require('../res/fongoh.jpg')} >
				<View style={{ padding: 10, alignItems: 'center', backgroundColor: '#34495ec0' }}>
					<Text style={{ lineHeight: 25, fontSize: 20, fontWeight: 'bold', color: '#ecf0f1' }} >Fongoh's todo list built with redux</Text>
				</View>
				<ScrollView 
					keyboardShouldPersistTaps="handled"
					style={{ padding: 10, backgroundColor: '#34495ee0', paddingBottom: 5 }} >
					{todos.length == 0 
	      			?
	      			<View style={{ alignItems: 'center' }}>
	      				<Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 50 }} >No todo item</Text>
	      			</View>
	      			:
	      			<View>
	      				{todos.map(todo => <Todo key={''+todo.id} todo={todo} />)}
	      			</View>
	      			}
				</ScrollView>
	      		{/*<View style={{ flex: 8, padding: 10, backgroundColor: '#26de8129' }}>
	      			{loadingTodos 
	      			?
	      			<ActivityIndicator size={50} color="#fff" />
	      			:
	      			<FlatList 
	      				keyExtractor={item => ''+item.id}
	      				data={todos}
	      				renderItem={({item}) => <Todo key={'i'+item.id} todo={item} />}
	      				/>
	      			}
	      		</View>*/}
				<View style={ footerStyle }>
					<NewTodo />
				</View>
			</ImageBackground>
		);
  	}
}

const styles = StyleSheet.create({
	headerStyle: {
		flex: 1, 
		backgroundColor: '#2c3e50',
	}, 
	footerStyle: {
		alignItems: 'center',
	    justifyContent: 'center',
		marginBottom: 0,
		height: 50,
		paddingTop: 10, 
		backgroundColor: '#34495ee0'
	} 
});

 
function mapStateToProps(state) {
	return {
		todos: state.todos,
		loadingTodos: state.loadingTodos,
	}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosScreen);
// Connect here
// export default connect(mapStateToProps, { fetchTodoData })(TodosScreen)