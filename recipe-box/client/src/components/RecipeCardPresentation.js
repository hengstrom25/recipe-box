import React, { Component } from 'react';
import '../index.css';
import HyperText from './HyperText';
import { withRouter } from "react-router";


class RecipeCardPresentation extends Component {
	constructor(props) {
		super(props)
	
	}
	
	render() {
	
		const { recipe, category, history } = this.props;
		
		return (
			<div className='recipe_card'>
				<p>category: {category.name}</p>
				<p>name: {recipe.name}</p>
				<p>recipe: <HyperText>{recipe.recipe_field}</HyperText></p>
				<p>notes: {recipe.notes}</p>
				<button onClick={() => {
					this.props.history.push('/recipe/edit/' + recipe.id)
					}}>Edit Recipe</button>
				<button onClick={() => {
					this.props.deleteRecipe(recipe.id)
					this.props.history.push('/category/' + recipe.category_id)
					}}>Delete Recipe</button>
			</div>
		)
	}
	
	componentDidMount() {
	 	this.props.fetchTheRecipe(this.props.id)
	 	this.props.fetchTheCategories()
	}	

};

export default withRouter(RecipeCardPresentation);