import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../index.css';
import { fetchRecipe } from '../actions/recipes';
import { deleteRecipe, deleteRecipeDb } from '../actions/recipe';
import { fetchCategories } from '../actions/categories';
import HyperText from './HyperText';


class RecipeCard extends Component {
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
					history.push('/recipe/edit/' + recipe.id)
					}}>Edit Recipe</button>
				<button onClick={() => {
					this.props.deleteRecipe(recipe.id)
					history.push('/category/' + recipe.category_id)
					}}>Delete Recipe</button>
			</div>
		)
	}
	
	componentDidMount() {
	 	this.props.fetchTheRecipe(this.props.id)
	 	this.props.fetchTheCategories()
	}	

};

const mapStateToProps = (state, ownProps) => 
	{const recipe=state.recipes.byId[ownProps.id] || {name: "", recipe_field: "", notes: "", category_id: 0}
		return {
		recipe: recipe,
		category: state.categories.byId[recipe.category_id] || {name: ""}
	}}
	
const mapDispatchToProps = dispatch => ({
	fetchTheRecipe: (id) => {
		dispatch(fetchRecipe(id))
	},
	fetchTheCategories: () => {
		dispatch(fetchCategories())
	},	
	deleteRecipe: (id) => {
		dispatch(deleteRecipeDb(id))
	},
})

export default RecipeCard = connect(mapStateToProps, mapDispatchToProps)(RecipeCard);