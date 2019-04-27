import React, { Component } from 'react';

import {
  Text,
  TouchableOpacity,
} from 'react-native';

class IncreaseCounterBtn extends Component {
  	render() {
	    return (
	      	<TouchableOpacity 
	      		onPress={() => this.props.increaseCounter()} 
	      		style={{ padding: 10, backgroundColor: 'green' }}>
      			<Text style={{color: 'white'}}>Increase counter</Text>
      		</TouchableOpacity>
	    );
  	}
}


export default IncreaseCounterBtn;