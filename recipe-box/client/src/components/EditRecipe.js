import React from 'react';
import EditRecipeForm from './EditRecipeForm'
/*import { initialize } from 'redux-form'*/
import { connect } from 'react-redux'
import store from '../store.js';
import { fetchRecipe } from '../actions/recipes';
import { setRecipeName, setRecipeField, setRecipeNotes } from '../actions/recipe'
import { fetchCategories } from '../actions/categories';

const mapStateToProps = (state, ownProps) => 
	{const recipe=state.recipes.byId[parseInt(ownProps.id)] || {name: "", recipe_field: "", notes: "", category_id: 0, id:parseInt(ownProps.id)}
	console.log(state, ownProps)
		return {
		recipe: recipe,
		id: parseInt(ownProps.id),
		category: state.categories.byId[recipe.category_id] || {name: ""}
	}}
	
const mapDispatchToProps = dispatch => ({
	setRecipeName: (id, name) => dispatch(setRecipeName(id, name)),
	setRecipeField: (id, recipe_field) => dispatch(setRecipeField(id, recipe_field)),
	setRecipeNotes: (id, notes) => dispatch(setRecipeNotes(id, notes)),
	})	

class EditRecipePresentation extends React.Component {
 constructor(props) {
        super(props)
    }
        
	submit = recipe => {
		console.log(recipe)
		
		const data = new URLSearchParams();
		data.append("name", recipe.name);
		data.append("recipe_field", recipe.recipe_field);
		data.append("notes", recipe.notes);
        data.append("category_id", this.props.recipe.category_id);
		
		return fetch("http://localhost:3001/recipes/" + this.props.id, {
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
		return <EditRecipeForm onSubmit={this.submit} recipe={this.props.recipe} 
		setRecipeName = {this.props.setRecipeName}
		setRecipeField = {this.props.setRecipeField}
		setRecipeNotes = {this.props.setRecipeNotes}
		id = {this.props.id}
		/>
	}
	
	componentDidMount() {
	 	store.dispatch(fetchRecipe(this.props.id)) 
	 	store.dispatch(fetchCategories())
	}	
}

const EditRecipe = connect(mapStateToProps, mapDispatchToProps)(EditRecipePresentation);

export default EditRecipe