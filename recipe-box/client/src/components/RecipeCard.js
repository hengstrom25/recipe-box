import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../index.css';
import store from '../store.js';
import { fetchRecipe } from '../actions/recipes';

const mapStateToProps = (state, ownProps) => 
	{const recipe=state.recipes.byId[ownProps.id]
		return {
		recipe: recipe,
		category: state.categories.byId[recipe.category_id]
	}}

class RecipeCardPresentation extends Component {
	constructor(props) {
	super(props)
	
		/*this.state = {
			recipe: {}
		};*/
	}
	render() {
	
		const { recipe, category } = this.props;
		
		return (
			<div className='recipe_card'>
				<p>category: {category.name}</p>
				<p>name: {recipe.name}</p>
				<p>recipe: {recipe.recipe_field}</p>
				<p>notes: {recipe.notes}</p>
			</div>
		)
	}
	
	componentDidMount() {
	 	store.dispatch(fetchRecipe(this.props.id))
	}	

};

const RecipeCard = connect(mapStateToProps, null)(RecipeCardPresentation);
	/*null to later be replaced by mapDispatchToProps*/

export default RecipeCard;