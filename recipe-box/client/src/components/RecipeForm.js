import React, { useState } from 'react';
import { connect } from 'react-redux';
import '../index.css'
/*import { change, registerField, Field, reduxForm } from 'redux-form';*/
/*import CategorySelector from '../components/CategorySelector';*/
		
const RecipeForm = ({ error, loading, recipe, onSubmit }) => {
	const [name, setName] = useState(recipe ? recipe.name : '');
	const [recipe_field, setRecipeField] = useState(recipe ? recipe.recipe_field : '');
	const [notes, setNotes] = useState(recipe ? recipe.notes : '');
	
		
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
							onChange={e => setName(e.target.value)}
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
							onChange={e => setNotes(e.target.value)}
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
	

export default RecipeForm