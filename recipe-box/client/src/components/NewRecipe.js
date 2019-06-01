import React from 'react';
import RecipeForm from './RecipeForm'

class NewRecipe extends React.Component {
	submit = values => {
		console.log(values)
	}
	render() {
		return <RecipeForm onSubmit={this.submit}/>
	}
}

export default NewRecipe