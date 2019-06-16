import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../index.css';
import store from '../store.js';
import { fetchRecipe } from '../actions/recipes';
import { deleteRecipe, deleteRecipeDb } from '../actions/recipe';
import { fetchCategories } from '../actions/categories';
import RecipeCardPresentation from '../components/RecipeCardPresentation';


const mapStateToProps = (state, ownProps) => 
	{const recipe=state.recipes.byId[ownProps.id] || {name: "", recipe_field: "", notes: "", category_id: 0}
		return {
		recipe: recipe,
		category: state.categories.byId[recipe.category_id] || {name: ""}
	}}
	
const mapDispatchToProps = dispatch => ({
	deleteRecipe: (id) => dispatch(deleteRecipeDb(id)),
	})
	
const RecipeCard = connect(mapStateToProps, mapDispatchToProps)(RecipeCardPresentation);

export default RecipeCard;