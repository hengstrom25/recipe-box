import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import '../index.css'

class CategoryCardPresentation extends Component {

	constructor(props) {
		super(props)
		}
		
	render() {
		
			const { category, recipes, id } = this.props;
			
			return (
				<div>
					<p className="diner_style">category: {category.name}</p>
					<ul className="category_card">
						{recipes.map(recipe => (
							<li key={recipe.id}>
								<Link to={`/recipes/${recipe.id}`}>{recipe.name}</Link>
							</li>
						))}
					</ul>
					<p className="category_card"><Link to={`/category/${id}/newrecipe`}>Add New Recipe</Link></p>
				</div>	
			)
		
		}
		
			
	componentDidMount() {
		this.props.fetchTheRecipes(this.props.id)
		this.props.fetchTheCategory(this.props.id)
		console.log('component did mount')
	}
	
	componentDidUpdate(prevProps) {
		if (this.props.id != prevProps.id) {
			this.props.fetchTheRecipes(this.props.id)
			this.props.fetchTheCategory(this.props.id)
		} 
	}


};


export default CategoryCardPresentation