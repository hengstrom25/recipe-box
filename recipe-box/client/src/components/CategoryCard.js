import React, { Component } from 'react';
import { BrowserRouter as Router, Link} from 'react-router-dom';

class CategoryCard extends Component {

	constructor(props) {
		super(props)
		
			this.state = {
				recipes: []
			};
		}
		
	render() {
		
			const { recipes } = this.state;
			
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
		
			
	componentDidMount() {
		fetch('http://localhost:3001/categories/' +this.props.id +'/recipes')
			.then(response => response.json())
			.then(data => {
				this.setState({
					recipes: data
				})
			})
	}


};

export default CategoryCard;



