import React, { Component } from 'react';

class RecipeBox extends Component {
	constructor(props) {
	super(props)
	
		this.state = {
	
		};
	}
	render() {
	
		const { categories } = this.props;
		
		return (
			<ul>
				{categories.map(category => (
					<li key={category.name}>{category.name}</li>
				))}
			</ul>
		)
	}

};

export default RecipeBox;

