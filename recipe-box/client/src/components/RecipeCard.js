import React, { Component } from 'react';

class RecipeCard extends Component {
	constructor(props) {
	super(props)
	
		this.state = {
			recipes: []
		};
	}
	render() {
	
		const { recipe } = this.props;
		
		return (
			<div>
				<p>name: {recipe.name}</p>
				<p>recipe: {recipe.recipe_field}</p>
				<p>notes: {recipe.notes}</p>
			</div>
		)
	}

};

export default RecipeCard;