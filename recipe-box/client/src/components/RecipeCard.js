import React, { Component } from 'react';

class RecipeCard extends Component {
	constructor(props) {
	super(props)
	
		this.state = {
	
		};
	}
	render() {
	
		const { recipe } = this.props;
		
		return (
			<div>
				<p>name: {recipe.name}</p>
				<p>url: {recipe.url}</p>
				<p>comments: {recipe.comments}</p>
			</div>
		)
	}

};

export default RecipeCard;