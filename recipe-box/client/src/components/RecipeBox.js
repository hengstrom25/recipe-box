import React, { Component } from 'react';
import Greeting from './Greeting'
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

	}
	render() {
	
		const { categories } = this.props;
		
		return (
			
			<div>
				<Greeting />
			</div>
		)
	}
	
	componentDidMount() {
		store.dispatch(fetchCategories())
		console.log('component did mount')
	}

};

const RecipeBox = connect(mapStateToProps, null)(RecipeBoxPresentation);


export default RecipeBox