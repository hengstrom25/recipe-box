import React, { Component } from 'react';	
	
	
class NewRecipeForm extends React.Component {

	render () {
	
	return (
		<div>
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
					<button type="submit">Save</button>
				</div>
			</div>
		)
	}
}
		
export default NewRecipeForm