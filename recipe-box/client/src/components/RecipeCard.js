import React, { Component } from 'react';

class RecipeCard extends Component {
	constructor(props) {
	super(props)
	
		this.state = {
			recipe: {}
		};
	}
	render() {
	
		const { recipe } = this.state;
		
		return (
			<div>
				<p>name: {recipe.name}</p>
				<p>recipe: {recipe.recipe_field}</p>
				<p>notes: {recipe.notes}</p>
			</div>
		)
	}
	
	componentDidMount() {
		fetch('http://localhost:3001/recipes/' +this.props.id)
			.then(response => response.json())
			.then(data => {
				this.setState({
					recipe: data
				})
			})
	}	

};

export default RecipeCard;