import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addRecipeDb } from '../actions/recipe';
import { updateFormInput, resetForm } from '../actions/form';
import '../index.css'

class RecipeForm extends Component {
	constructor(props) {
		super(props);
};
	
	handleChange = event => {
		this.props.updateFormInput(event.target.name, event.target.value)
	};
	
	
	handleOnSubmit = event => {
		event.preventDefault()
		const {catid} = this.props.match.params;
		const {history} = this.props
		this.props.addRecipeDb(this.props.formData, catid, history)
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
							value={this.props.formData.name}
							onChange={this.handleChange}
						/>
					</label>
					</div>
					<div className="recipe_form">
					<label> 
						recipe:
						<input
							name="recipe_field"
							value={this.props.formData.recipe_field}
							onChange={this.handleChange}
						/>
					</label>
					</div>
					<div className="recipe_form">
					<label> 
						notes:
						<input
							name="notes"
							value={this.props.formData.notes}
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
		this.props.resetForm()
	}
}



const mapStateToProps = (state) => {
	return {
		formData: state.form
	}
}

/*const mapDispatchToProps = (dispatch) => {
	return {
		updateFormInput: () => dispatch(updateFormInput())
	}
}*/

export default connect(mapStateToProps, {updateFormInput, addRecipeDb, resetForm})(RecipeForm)
