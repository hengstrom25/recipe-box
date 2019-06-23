import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateRecipeDb } from '../actions/recipe';
import { updateFormInput } from '../actions/form';
import store from '../store.js';
import '../index.css'
import { fetchRecipe } from '../actions/recipes';
import { fetchCategories } from '../actions/categories';

class EditRecipeForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: props.name,
			recipe_field: props.recipe_field,
			notes: props.notes
		}
};
	
	handleChange = event => {
		this.props.updateFormInput(event.target.name, event.target.value)
		/*this.setState({ [event.target.name]: event.target.value });*/
	};
	
	
	handleOnSubmit = event => {
		event.preventDefault()
		this.props.formData.category_id = this.props.category_id;
		this.props.updateRecipeDb(this.props.formData)
		this.props.history.push("/recipe/" +this.id)
	};
	
	render() {	
	
	return (
		<div>
			<h2 className="diner_style">Recipe</h2>
			<form onSubmit={e => this.handleOnSubmit(e)}>
					<div className="recipe_form">
					<label> 
						name:
						<input
							name="name"
							value={this.props.recipe.name}
							onChange={this.handleChange}
						/>
					</label>
					</div>
					<div className="recipe_form">
					<label> 
						recipe:
						<input
							name="recipe_field"
							value={this.props.recipe.recipe_field}
							onChange={this.handleChange}
						/>
					</label>
					</div>
					<div className="recipe_form">
					<label> 
						notes:
						<input
							name="notes"
							value={this.props.recipe.notes}
							onChange={this.handleChange}
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
	
    componentDidMount() {
         store.dispatch(fetchRecipe(this.props.id))
         store.dispatch(fetchCategories())
    }
}




const mapStateToProps = (state, ownProps) =>
    {const recipe=state.recipes.byId[parseInt(ownProps.id)] || 
    	{name: "", recipe_field: "", notes: "", category_id: 0, id:parseInt(ownProps.id)}
    console.log(state, ownProps)
        return {
        recipe: recipe,
        id: parseInt(ownProps.id),
        category: state.categories.byId[recipe.category_id] || {name: ""}
    }}


/*const mapDispatchToProps = (dispatch) => {
	return {
		updateFormInput: () => dispatch(updateFormInput())
	}
}*/

export default connect(mapStateToProps, {updateFormInput, updateRecipeDb})(EditRecipeForm)