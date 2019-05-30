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
		</div>
	)
	}

}

export default RecipeForm