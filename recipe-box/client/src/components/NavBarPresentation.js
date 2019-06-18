import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import store from '../store.js';
import { fetchCategories } from '../actions/categories';
import '../index.css'


class NavBarPresentation extends Component { 
	constructor(props) {
		super(props)
	}
	
	render() {
	
		const { categories } = this.props;
		
		return (
			<div className="navbar">
				<a className="home" href="http://localhost:3000/recipebox">Recipe Box</a>
			<ul>
				{categories.map(category => (
					<li key={category.id}>
						<Link to={`/category/${category.id}`}>{category.name}</Link>
					</li>
				))}
			</ul>
			</div>
		)
	}
	
	componentDidMount() {
		store.dispatch(fetchCategories())
		console.log('component did mount')
	}

};

export default NavBarPresentation;