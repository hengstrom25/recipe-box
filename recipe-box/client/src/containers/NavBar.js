import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCategories } from '../actions/categories';
import NavBarPresentation from '../components/NavBarPresentation'

const mapStateToProps = state => 
	({
		categories: state.categories.allIds.map(id => state.categories.byId[id])
	})
	
const mapDispatchToProps = dispatch => ({
	fetchTheCategories: () => {
		dispatch(fetchCategories())	
		}
	})
	
	
const NavBar = connect(mapStateToProps, mapDispatchToProps)(NavBarPresentation);
	
export default NavBar;				
