import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import CategorySelector from '../components/CategorySelector';
		
	let RecipeForm = props => {
		const { handleSubmit } = props
		return (
			<form onSubmit={handleSubmit}>
				<h1>Add New Recipe</h1>
					<div>
					<label for="category">Select Category</label>
					<Field 
						name="categorySelector" 
						component="select"
						//category={category}
					>
					{}
					</Field>
				</div>
				<div>
					<label for="name">name: </label>
						<input type="text"
						/>
				</div>
				<div>
					<label for="recipe_field">recipe: </label>
						<textarea>Enter URL or Recipe
						</textarea>
				</div>
				<div>
					<label for="notes">notes: </label>
						<textarea>
						</textarea>
				</div>
				<div>
					<button type="submit">Save</button>
				</div>
			</form>
		)
		}
	
	
	RecipeForm= reduxForm({
		form: 'recipeform'
	})(RecipeForm)
	


export default RecipeForm