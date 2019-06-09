import React from 'react';
import RecipeForm from './RecipeForm'
/*import { initialize } from 'redux-form'*/
import { connect } from 'react-redux'
import store from '../store.js';
import { fetchRecipe } from '../actions/recipes';
import { fetchCategories } from '../actions/categories';

const mapStateToProps = (state, ownProps) => 
	{const recipe=state.recipes.byId[parseInt(ownProps.id)] || {name: "", recipe_field: "", notes: "", category_id: 0, id:parseInt(ownProps.id)}
	console.log(state, ownProps)
		return {
		recipe: recipe,
		id: parseInt(ownProps.id),
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
		
		return fetch("http://localhost:3001/recipe/" + this.props.id, {
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
	
	componentDidMount() {
	 	store.dispatch(fetchRecipe(this.props.id)) 
	 	store.dispatch(fetchCategories())
	}	
}

const EditRecipe = connect(mapStateToProps, null)(EditRecipeForm);

export default EditRecipe