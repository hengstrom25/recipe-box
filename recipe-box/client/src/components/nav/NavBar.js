import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import store from '../../store.js';
import { fetchCategories } from '../../actions/categories';
import './navbar.css';

const mapStateToProps = state => 
	({
		categories: state.categories.allIds.map(id => state.categories.byId[id])
	})

class NavBarPresentation extends Component { 
	constructor(props) {
	super(props)
	}
	
	render() {
	
		const { categories } = this.props;
		
		return (
			<div className="nav nav-tab">
			<ul>
				{categories.map(category => (
					<li className="nav-item" key={category.id}>
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

const NavBar = connect(mapStateToProps, null)(NavBarPresentation);
	
export default NavBar;				
