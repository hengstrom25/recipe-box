import React, { Component } from 'react';
import { BrowserRouter as Router, Link} from 'react-router-dom';
import { connect } from 'react-redux';
import store from '../store.js';
import { fetchCategories } from '../actions/categories';


const mapStateToProps = state => 
	({
		categories: state.categories.allIds.map(id => state.categories.byId[id])
	})

class RecipeBoxPresentation extends Component {
	constructor(props) {
	super(props)
	
		/*this.state = {
			categories: []
		};*/
	}
	render() {
	
		const { categories } = this.props;
		
		return (
			/*<ul>
				{categories.map(category => (
					<li key={category.id}>
						<Link to={`/category/${category.id}`}>{category.name}</Link>
					</li>
				))}
			</ul>*/
			
			<div>
				<h1 className="diner_style">What's for Dinner?</h1>
				<p className="description">Welcome to my Recipe Box! A place to save favorite recipes from the 
					internet and a place to write down recipes you want to remember!</p>
				<p className="description">Select a category above to view, add, delete, and edit recipes</p>
			</div>
		)
	}
	
	componentDidMount() {
		store.dispatch(fetchCategories())
		console.log('component did mount')
	}

};

const RecipeBox = connect(mapStateToProps, null)(RecipeBoxPresentation);
	/*null to later be replaced by mapDispatchToProps*/

export default RecipeBox