import React, { Component } from 'react';

import {
  Text,
  TouchableOpacity,
} from 'react-native';

class DecreaseCounterBtn extends Component {
  	render() {
	    return (
	      	<TouchableOpacity onPress={() => this.props.decreaseCounter()} style={{ padding: 10, backgroundColor: 'red' }}>
      			<Text style={{color: 'white'}}>Decrease counter</Text>
      		</TouchableOpacity>
	    );
  	}
}


export default DecreaseCounterBtn;