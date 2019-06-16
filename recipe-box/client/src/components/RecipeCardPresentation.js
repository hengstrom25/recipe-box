import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../index.css';
import store from '../store.js';
import { fetchRecipe } from '../actions/recipes';
import { deleteRecipe, deleteRecipeDb } from '../actions/recipe';
import { fetchCategories } from '../actions/categories';
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
	 	store.dispatch(fetchRecipe(this.props.id)) 
	 	store.dispatch(fetchCategories())
	}	

};

export default RecipeCardPresentation;