import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateRecipeDb } from '../actions/recipe';
import { updateFormInput } from '../actions/form';
import '../index.css'
import { fetchRecipe } from '../actions/recipes';
import { fetchCategories } from '../actions/categories';

class EditRecipeForm extends Component {
	constructor(props) {
		super(props);
};
	
	handleChange = event => {
		this.props.updateFormInput(event.target.name, event.target.value)
	};
	
	
	handleOnSubmit = event => {
		event.preventDefault()
		const {history} = this.props
		this.props.updateRecipeDb(this.props.id,  
			{name: this.props.name, 
			recipe_field: this.props.recipe_field, 
			notes: this.props.notes,
			category_id: this.props.category_id},
			history)
	};
	
	render() {	
	
	return (
		<div>
			<h2 className="diner_style">Edit Recipe</h2>
			<form onSubmit={e => this.handleOnSubmit(e)}>
					<div className="recipe_form">
					<label> 
						name:
						<input
							type="text"
							name="name"
							value={this.props.name}
							onChange={this.handleChange}
						/>
					</label>
					</div>
					<div className="recipe_form">
					<label> 
						recipe:
						<textarea
							type="text"
							name="recipe_field"
							value={this.props.recipe_field}
							onChange={this.handleChange}
						/>
					</label>
					</div>
					<div className="recipe_form">
					<label> 
						notes:
						<textarea
							type="text"
							name="notes"
							value={this.props.notes}
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
         this.props.fetchRecipe(this.props.id)
         this.props.fetchCategories()
    }
}


const mapStateToProps = (state, ownProps) => {
	return {
		name: state.form.name, 
		recipe_field: state.form.recipe_field, 
		notes: state.form.notes,
		id: ownProps.id,
		category_id: state.form.category_id
    }}


export default connect(mapStateToProps, {updateFormInput, updateRecipeDb, fetchRecipe, fetchCategories})(EditRecipeForm)