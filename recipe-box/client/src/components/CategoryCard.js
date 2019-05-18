import React, { Component } from 'react';
import { BrowserRouter as Router, Link} from 'react-router-dom';
import { connect } from 'react-redux';

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
		
			
	/*componentDidMount() {
		fetch('http://localhost:3001/categories/' +this.props.id +'/recipes')
			.then(response => response.json())
			.then(data => {
				this.setState({
					recipes: data
				})
			})
	}*/


};

const CategoryCard = connect(mapStateToProps, null)(CategoryCardPresentation);
	/*null to later be replaced by mapDispatchToProps*/

export default CategoryCard;



