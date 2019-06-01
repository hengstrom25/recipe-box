import React, { Component } from 'react';

class RecipeForm extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			newRecipe: {
				category: '',
				name: '',
				recipe: '',
				notes: '',
			};
		
		/*categoryOptions: ['Breakfast', 'Salad', 'Soup', 'Side Dishes', 'Meat Dishes', 'Vegetarian', 'Pasta', 'Dessert', 'Other']*/
		};
	
	this.handleFormSubmit = this.handleFormSubmit.bind(this);
	}
	
	handleFormSubmit() {
	
	}
	
	render() {
	
	
	return(
		<div>
			<h1>Add New Recipe</h1>
			<form onSubmit={this.handleFormSubmit}>
				<p>
				<label>category: </label>
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
			</form>
		</div>
	)
	}

}

export default RecipeForm