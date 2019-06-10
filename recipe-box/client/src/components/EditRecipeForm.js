import React, { useState } from 'react';
import { connect } from 'react-redux';
/*import { change, registerField, Field, reduxForm } from 'redux-form';*/
/*import CategorySelector from '../components/CategorySelector';*/
		
const EditRecipeForm = ({ error, loading, recipe, onSubmit, id, setRecipeName, setRecipeField, setRecipeNotes }) => {
	/*const [name, setName] = useState(recipe ? recipe.name : '');
	const [recipe_field, setRecipeField] = useState(recipe ? recipe.recipe_field : '');
	const [notes, setNotes] = useState(recipe ? recipe.notes : '');*/ 
	
		
	return (
		<div>
			<h2>Recipe</h2>
			<form onSubmit={e => {
				e.preventDefault()
				onSubmit(recipe)
				}}>
					<div>
					<label> 
						name:
						<input
							name="name"
							defaultValue={recipe.name}
							onChange={e => setRecipeName(id, e.target.value)}
						/>
					</label>
					</div>
					<div>
					<label> 
						recipe:
						<input
							name="recipe_field"
							defaultValue={recipe.recipe_field}
							onChange={e => setRecipeField(id, e.target.value)}
						/>
					</label>
					</div>
					<div>
					<label> 
						notes:
						<input
							name="notes"
							defaultValue={recipe.notes}
							onChange={e => setRecipeNotes(id, e.target.value)}
						/>
					</label>
					</div>
				<div>
					<button type="submit"/*onClick={() => recipe(name, recipe_field, notes)}*/>Save</button>
				</div>
			</form>
		</div>
		)
		}
	

export default EditRecipeForm