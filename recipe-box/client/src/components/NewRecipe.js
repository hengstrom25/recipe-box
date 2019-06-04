import React from 'react';
import RecipeForm from './RecipeForm'
import { initialize } from 'redux-form'
import { connect } from 'react-redux'

class NewRecipe extends React.Component {
 constructor(props) {
        super(props)
    }
	submit = values => {
		console.log(values)
		
		const data = new URLSearchParams();
		data.append("name", values.name);
		data.append("recipe_field", values.recipe_field);
		data.append("notes", values.notes);
        data.append("category_id", this.props.category_id);
		
		return fetch("http://localhost:3001/recipes", {
			method: "POST",
			body: data,
		})/*.then window.location.href = "http://localhost:3000"

		
	/*handleSubmit(data) {
		console.log('Submit', data);
		this.props.dispatch(initialize('recipe', {}));*/
	}	
		
	render() {
		return <RecipeForm onSubmit={this.submit}/>
	}
}

export default NewRecipe