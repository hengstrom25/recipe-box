import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import store from '../store.js';
import '../index.css'
import { fetchRecipes } from '../actions/recipes';
import { fetchCategory } from '../actions/categories';

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
								<Link to={`/recipe/${recipe.id}`}>{recipe.name}</Link>
							</li>
						))}
					</ul>
					<p className="category_card"><Link to={`/category/${id}/newrecipe`}>Add New Recipe</Link></p>
				</div>	
			)
		
		}
		
			
	componentDidMount() {
		store.dispatch(fetchRecipes(this.props.id))
		store.dispatch(fetchCategory(this.props.id))
		console.log('component did mount')
	}
	
	shouldComponentUpdate(nextProps) {
		if (this.props.id != nextProps.id) {
			this.props.refetchCategory(nextProps.id)
		} return true
	}


};


export default CategoryCardPresentation