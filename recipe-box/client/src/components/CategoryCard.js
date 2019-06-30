import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import '../index.css'
import { connect } from 'react-redux';
import { fetchRecipes } from '../actions/recipes';
import { fetchCategory } from '../actions/categories';

class CategoryCard extends Component {

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

const mapStateToProps = (state, ownProps) => 
		({
			id: ownProps.id,
			category: state.categories.byId[ownProps.id] || {name:""},
			recipes: state.recipes.allIds.map(id => state.recipes.byId[id])
		})
		
const mapDispatchToProps = dispatch => ({
	fetchTheRecipes: (id) => {
		dispatch(fetchRecipes(id))
		},
	fetchTheCategory: (id) => {
		dispatch(fetchCategory(id))
		},
	})


export default CategoryCard = connect(mapStateToProps, mapDispatchToProps)(CategoryCard);
