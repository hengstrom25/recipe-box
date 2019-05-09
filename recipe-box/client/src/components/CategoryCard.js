import React, { Component } from 'react';

class CategoryCard extends Component {

	constructor(props) {
		super(props)
		
			this.state = {
			
			};
		}
		
	render() {
		
			const { recipes } = this.props;
			
			return (
				<ul>
					{recipes.map(recipe => (
						<li key={recipe.name}>{recipe.name}</li>
					))}
				</ul>			
			)
		
		}

};

export default CategoryCard;

