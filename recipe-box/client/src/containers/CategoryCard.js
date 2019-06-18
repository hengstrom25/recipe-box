import React, { Component } from 'react';
import { BrowserRouter as Router, Link} from 'react-router-dom';
import { connect } from 'react-redux';
import store from '../store.js';
import '../index.css';
import { fetchRecipes } from '../actions/recipes';
import { fetchCategory } from '../actions/categories';
import CategoryCardPresentation from '../components/CategoryCardPresentation'

const mapStateToProps = (state, ownProps) => 
		({
			id: ownProps.id,
			category: state.categories.byId[ownProps.id] || {name:""},
			recipes: state.recipes.allIds.map(id => state.recipes.byId[id])
		})
		
const mapDispatchToProps = dispatch => ({
	refetchCategory: (id) => {
		dispatch(fetchRecipes(id))
		dispatch(fetchCategory(id))	
		}
	})


const CategoryCard = connect(mapStateToProps, mapDispatchToProps)(CategoryCardPresentation);

export default CategoryCard;



