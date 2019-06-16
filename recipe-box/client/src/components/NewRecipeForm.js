import React, { Component } from 'react';	
import '../index.css'
	
const NewRecipeForm = ({ error, loading, recipe, onSubmit, id, setRecipeName, setRecipeField, setRecipeNotes }) => {
	
	return (
		<div>
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
		
export default NewRecipeForm