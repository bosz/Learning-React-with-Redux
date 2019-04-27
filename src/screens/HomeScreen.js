import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text, 
  TouchableOpacity,
} from 'react-native';

import DecreaseCounterBtn from './../components/DecreaseCounterBtn';
import IncreaseCounterBtn from './../components/IncreaseCounterBtn';
import ShowCounter from './../components/ShowCounter';

class HomeScreen extends Component {
	constructor(props) {
	  	super(props);
	
	  	this.state = {
	  		counter: 0
	  	};
	}

	increaseCounter() {
		this.setState({counter: this.state.counter+1})
	}

	decreaseCounter() {
		this.setState({counter: this.state.counter-1})
	}

  	render() {
	    return (
	      	<View style={styles.container}>
	      		<IncreaseCounterBtn increaseCounter={ () => this.increaseCounter()} />

	      		<ShowCounter counter={this.state.counter} />
	      		
	      		<DecreaseCounterBtn decreaseCounter={ () => this.decreaseCounter()} />

	      	</View>
	    );
  	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
});



export default HomeScreen;