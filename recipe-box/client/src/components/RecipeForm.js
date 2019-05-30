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
	
	return(
		<div>
			<label>name: </label>
			<input
				type="text"
			/>
		</div>
		<div>
			<label>recipe: </label>
			<input
				type="text"
			/>
		</div>
		<div>
			<label>notes: </label>
			<input
				type="text"
			/>
		</div>
	)

}

export default RecipeForm