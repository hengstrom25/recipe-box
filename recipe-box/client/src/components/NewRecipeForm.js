import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
import { addRecipeDb } from '../actions/recipe';
import '../index.css'

class RecipeForm extends Component {
	constructor(props) {
		super(props);
		
	this.state ={
		name: '',
		recipe_field: '',
		notes: '',
	};
};
	
	handleNameInput = event => {
		this.setState({ name: event.target.value });
	};
	
	handleRecipeFieldInput = event => {
		this.setState({ recipe_field: event.target.value });
	};
	
	handleNotesInput = event => {
		this.setState({ notes: event.target.value });
	};
	
	handleOnSubmit(event) {
		event.preventDefault();
		this.props.addRecipeDb(this.state, this.props.history)
	};
		
/*const NewRecipeForm = ({ error, loading, recipe, onSubmit }) => {
	const [name, setRecipeName] = useState(recipe ? recipe.name : '');
	const [recipe_field, setRecipeField] = useState(recipe ? recipe.recipe_field : '');
	const [notes, setRecipeNotes] = useState(recipe ? recipe.notes : '');*/
	
	render() {	
	
	return (
		<div>
			<h2 className="diner_style">Recipe</h2>
			<form onSubmit={e => this.handleOnSubmit(e)}>
					<div className="recipe_form">
					<label> 
						name:
						<input
							name="name"
							value={this.state.name}
							onChange={this.handleNameInput}
						/>
					</label>
					</div>
					<div className="recipe_form">
					<label> 
						recipe:
						<input
							name="recipe_field"
							value={this.state.recipe_field}
							onChange={this.handleRecipeFieldInput}
						/>
					</label>
					</div>
					<div className="recipe_form">
					<label> 
						notes:
						<input
							name="notes"
							value={this.state.notes}
							onChange={this.handleNotesInput}
						/>
					</label>
					</div>
				<div>
					<button type="submit">Save</button>
				</div>
			</form>
		</div>
		)
	}
}
	

export default RecipeForm