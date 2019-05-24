import React, { Component } from 'react';
import { BrowserRouter as Router, Link} from 'react-router-dom';
import { connect } from 'react-redux';
import store from '../store.js';
import { fetchRecipes } from '../actions/recipes';

const mapStateToProps = (state, ownProps) => 
	({
		recipes: state.categories.byId[ownProps.id].recipes.map(id => state.recipes.byId[id])
	})

class CategoryCardPresentation extends Component {

	constructor(props) {
		super(props)
		
			/*this.state = {
				recipes: []
			};*/
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
		
			
	componentDidMount() {
		store.dispatch(fetchRecipes())
		console.log('component did mount')
	}


};

const CategoryCard = connect(mapStateToProps, null)(CategoryCardPresentation);
	/*null to later be replaced by mapDispatchToProps*/

export default CategoryCard;



