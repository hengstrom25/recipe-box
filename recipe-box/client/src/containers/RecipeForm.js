import React, { Component } from 'react';

class RecipeForm extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			name: '',
			recipe: '',
			notes: '',
		};
	};
	
	render() {
	
	
	return(
		<div>
			<h1>Add New Recipe</h1>
			<form onSubmit={event => this.handleOnSubmit(event)}>
			<p>
				<label>name: </label>
				<input
					type="text" onChange={(event) => this.handleChange(event)}
				/>
			</p>
			<p>
				<label>recipe: </label>
				<input
					type="text"
				/>
			</p>
			<p>
				<label>notes: </label>
				<input
					type="text"
				/>
			</p>
				<input type="submit" />
		</div>
	)
	}

}

export default RecipeForm