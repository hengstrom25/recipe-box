import React from 'react';
import RecipeForm from './RecipeForm'

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
		})//.then
		/*redirect*/
		
	}
	render() {
		return <RecipeForm onSubmit={this.submit}/>
	}
}

export default NewRecipe