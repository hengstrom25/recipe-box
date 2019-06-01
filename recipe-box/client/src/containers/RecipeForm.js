import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import CategorySelector from '../components/CategorySelector';

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
					<label>Select Category</label>
					<Field 
						name="categorySelector" 
						component="select"
						//category={category}
					>
					{}
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