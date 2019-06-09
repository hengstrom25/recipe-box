import React from 'react';
import RecipeForm from './RecipeForm'
/*import { initialize } from 'redux-form'*/
import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => 
	{const recipe=state.recipes.byId[ownProps.id] || {name: "", recipe_field: "", notes: "", category_id: 0}
		return {
		recipe: recipe,
		category: state.categories.byId[recipe.category_id] || {name: ""}
	}}

class EditRecipeForm extends React.Component {
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
		
		return fetch("http://localhost:3001/recipe/" + this.props.recipe.id, {
			method: "PATCH",
			body: data,
		}).then(response => response.json())
			.then(json => {
			console.log(json)
			window.location.href = "http://localhost:3000/recipe/" +json.id 
		});
		
	/*handleSubmit(data) {
		console.log('Submit', data);
		this.props.dispatch(initialize('recipe', {}));*/
	}	
		
	render() {
		return <RecipeForm onSubmit={this.submit} recipe={this.props.recipe}/>
	}
}

const EditRecipe = connect(mapStateToProps, null)(EditRecipeForm);

export default EditRecipe