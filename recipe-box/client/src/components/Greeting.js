import React, { Component } from 'react';
import '../index.css';

class Greeting extends React.Component {
	
	render () {
	const greeting = "What's for Dinner?";
	
	

	return (
			<h1 className="diner_style">{greeting}</h1>
			)
	}
}


export default Greeting;