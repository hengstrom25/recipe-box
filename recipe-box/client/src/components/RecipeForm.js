import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import CategorySelector from '../components/CategorySelector';
		
	let RecipeForm = props => {
		const { handleSubmit } = props
		return (
			<form onSubmit={handleSubmit}>
				<h1>Add New Recipe</h1>
				<div>
					<label htmlFor="name">name: </label>
					<Field name="name" component="input" type="text"/>
				</div>
				<div>
					<label htmlFor="recipe_field">recipe: </label>
					<Field name="recipe_field" component="textarea" type="text" placeholder="Enter URL or recipe"/>
				</div>
				<div>
					<label htmlFor="notes">notes: </label>
					<Field name="notes" component="textarea" type="text"/>
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