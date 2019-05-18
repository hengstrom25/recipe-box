import React, { Component } from 'react';
import { BrowserRouter as Router, Link} from 'react-router-dom';

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
						<li key={recipe.name}>
							<Link to={`/recipe/${recipe.id}`}>{recipe.name}</Link>
						</li>
					))}
				</ul>			
			)
		
		}

};

export default CategoryCard;



