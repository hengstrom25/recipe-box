import React, { Component } from 'react';
import { BrowserRouter as Router, Link} from 'react-router-dom';
import { connect } from 'react-redux';
import store from '../store.js';
import { fetchRecipes } from '../actions/recipes';
import { fetchCategory } from '../actions/categories';

const mapStateToProps = (state, ownProps) => 
	({
		id: ownProps.id,
		category: state.categories.byId[ownProps.id] || {name:""},
		recipes: state.recipes.allIds.map(id => state.recipes.byId[id])
	})

/*recipes: state.categories.byId[ownProps.id].recipes.map(id => state.recipes.byId[id])*/
class CategoryCardPresentation extends Component {

	constructor(props) {
		super(props)
		
			/*this.state = {
				recipes: []
			};*/
		}
		
	render() {
		
			const { category, recipes, id } = this.props;
			
			return (
				<div>
					<p>category: {category.name}</p>
					<ul>
						{recipes.map(recipe => (
							<li key={recipe.id}>
								<Link to={`/recipe/${recipe.id}`}>{recipe.name}</Link>
							</li>
						))}
					</ul>
					<Link to={`/category/${id}/newrecipe`}>Add New Recipe</Link>	
				</div>	
			)
		
		}
		
			
	componentDidMount() {
		store.dispatch(fetchRecipes(this.props.id))
		store.dispatch(fetchCategory(this.props.id))
		console.log('component did mount')
	}


};

const CategoryCard = connect(mapStateToProps, null)(CategoryCardPresentation);
	/*null to later be replaced by mapDispatchToProps*/

export default CategoryCard;



