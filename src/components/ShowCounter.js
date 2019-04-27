'use strict';

import React, { Component } from 'react';

import {
  	StyleSheet,
  	View,
  	Text,
} from 'react-native';

class ShowCounter extends Component {
  	render() {
	    return (
	      	<View><Text style={styles.welcome}>{this.props.counter}</Text></View>
	    );
  	}
}

const styles = StyleSheet.create({
	welcome: {
		fontSize: 30,
		textAlign: 'center',
		margin: 10,
	},
});


export default ShowCounter;