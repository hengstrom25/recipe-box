import React from 'react';
import '../index.css'
		
const EditRecipeForm = ({ error, loading, recipe, onSubmit, id, setRecipeName, setRecipeField, setRecipeNotes }) => {
		
	return (
		<div>
			<h2 className="diner_style">Recipe</h2>
			<form onSubmit={e => {
				e.preventDefault()
				onSubmit(recipe)
				}}>
					<div className="recipe_form">
					<label> 
						name:
						<input
							name="name"
							defaultValue={recipe.name}
							onChange={e => setRecipeName(id, e.target.value)}
						/>
					</label>
					</div>
					<div className="recipe_form">
					<label> 
						recipe:
						<input
							name="recipe_field"
							defaultValue={recipe.recipe_field}
							onChange={e => setRecipeField(id, e.target.value)}
						/>
					</label>
					</div>
					<div className="recipe_form">
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
					<button type="submit">Save</button>
				</div>
			</form>
		</div>
		)
		}
	

export default EditRecipeForm