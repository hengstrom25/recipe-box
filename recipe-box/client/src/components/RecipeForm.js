import React, { useState } from 'react';
import { connect } from 'react-redux';
/*import NewRecipeForm from './NewRecipeForm';*/
import '../index.css'
		
const RecipeForm = ({ error, loading, recipe, onSubmit }) => {
	const [name, setRecipeName] = useState(recipe ? recipe.name : '');
	const [recipe_field, setRecipeField] = useState(recipe ? recipe.recipe_field : '');
	const [notes, setRecipeNotes] = useState(recipe ? recipe.notes : '');
	
		
	return (
		<div>
			<h2 className="diner_style">Recipe</h2>
			<form onSubmit={e => {
				e.preventDefault()
				onSubmit({name, recipe_field, notes})
				}}>
					<div className="recipe_form">
					<label> 
						name:
						<input
							name="name"
							value={name}
							onChange={e => setRecipeName(e.target.value)}
						/>
					</label>
					</div>
					<div className="recipe_form">
					<label> 
						recipe:
						<input
							name="recipe_field"
							value={recipe_field}
							onChange={e => setRecipeField(e.target.value)}
						/>
					</label>
					</div>
					<div className="recipe_form">
					<label> 
						notes:
						<input
							name="notes"
							value={notes}
							onChange={e => setRecipeNotes(e.target.value)}
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
	

export default RecipeForm