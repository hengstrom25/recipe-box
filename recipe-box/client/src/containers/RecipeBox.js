import React, { Component } from 'react';
import RecipeBoxPresentation from '../components/RecipeBoxPresentation';
import { connect } from 'react-redux';

const mapStateToProps = state => 
	({
		categories: state.categories.allIds.map(id => state.categories.byId[id])
	})

const RecipeBox = connect(mapStateToProps, null)(RecipeBoxPresentation);


export default RecipeBox