import React, { Component } from 'react';
import { Navbar, Nav, Brand, Item} from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import store from '../../store.js';
import { fetchCategories } from '../../actions/categories';
/*import './navbar.css';*/

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
			<Navbar fix="top" bg="dark">
			<Navbar.Brand>Recipe Box</Navbar.Brand>
			<Nav.Item>
				{categories.map(category => (
					<li key={category.id}>
						<Nav.Link to={`/category/${category.id}`}>{category.name}</Nav.Link>
					</li>
				))}
			</Nav.Item>
			</Navbar>
		)
	}
	
	componentDidMount() {
		store.dispatch(fetchCategories())
		console.log('component did mount')
	}

};

const NavBar = connect(mapStateToProps, null)(NavBarPresentation);
	
export default NavBar;				
