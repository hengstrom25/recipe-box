import React, { Component } from 'react';
import '../index.css';
import HyperText from './HyperText';


class RecipeCardPresentation extends Component {
	constructor(props) {
		super(props)
	
	}
	
	render() {
	
		const { recipe, category } = this.props;
		
		return (
			<div className='recipe_card'>
				<p>category: {category.name}</p>
				<p>name: {recipe.name}</p>
				<p>recipe: <HyperText>{recipe.recipe_field}</HyperText></p>
				<p>notes: {recipe.notes}</p>
				<button onClick={() => {
					window.location.href = 'http://localhost:3000/recipe/edit/' + recipe.id
					}}>Edit Recipe</button>
				<button onClick={() => {
					this.props.deleteRecipe(recipe.id)
					window.location.href = 'http://localhost:3000/category/' + recipe.category_id
					}}>Delete Recipe</button>
			</div>
		)
	}
	
	componentDidMount() {
	 	this.props.fetchTheRecipe(this.props.id)
	 	this.props.fetchTheCategories()
	}	

};

export default RecipeCardPresentation;