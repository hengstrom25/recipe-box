import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import store from '../store.js';
import { fetchCategories } from '../actions/categories';
import NavBarPresentation from '../components/NavBarPresentation'

const mapStateToProps = state => 
	({
		categories: state.categories.allIds.map(id => state.categories.byId[id])
	})

const NavBar = connect(mapStateToProps, null)(NavBarPresentation);
	
export default NavBar;				
