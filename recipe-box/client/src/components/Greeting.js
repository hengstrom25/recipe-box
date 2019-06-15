import React, { Component } from 'react';
import '../index.css';

class Greeting extends React.Component {
	
	render () {
	const greeting = "What's for Dinner?";
	
	

	return (
		<div>
			<h1 className="diner_style">{greeting}</h1>
			<p className="description">Welcome to my Recipe Box! A place to save favorite recipes from the 
					internet and a place to write down recipes you want to remember!</p>
			<p className="description">Select a category above to view, add, delete, and edit recipes</p>
		</div>
			)
	}
}


export default Greeting;