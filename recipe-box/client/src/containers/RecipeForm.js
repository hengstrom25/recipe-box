import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

/*class RecipeForm extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			newRecipe: {
				category: '',
				name: '',
				recipe: '',
				notes: '',
			},
		
		/*categoryOptions: ['Breakfast', 'Salad', 'Soup', 'Side Dishes', 'Meat Dishes', 'Vegetarian', 'Pasta', 'Dessert', 'Other'],
		};
	
	this.handleFormSubmit = this.handleFormSubmit.bind(this);
	}
	
	handleFormSubmit() {
	
	}
	
	render() {*/
	
	let RecipeForm = props => {
		const { handleSubmit } = props
		return (
			<form onSubmit={handleSubmit}>
				<h1>Add New Recipe</h1>
					<div>
				<Field name="category" component="select">
					<option />
					<option>Breakfast</option>		
					<option>Salad</option>
					<option>Soup</option>
					<option>Side Dishes</option>
								
				</Field>
				</div>
				<p>
					<label>recipe: </label>
						<input type="text"
						/>
				</p>
				<p>
					<label>notes: </label>
						<input type="text"
						/>
				</p>
			</form>
		)
		}
	
	
	RecipeForm= reduxForm({
		form: 'recipeform'
	})(RecipeForm)
	


export default RecipeForm