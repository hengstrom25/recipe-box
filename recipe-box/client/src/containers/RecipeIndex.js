import React from 'react';
import { connect } from 'react-redux';
import '../index.css';
import CategoryCard from '../components/CategoryCard'

const RecipeIndex = ({categories}) => (

	<div>
		{categories.map ( id => (
			<CategoryCard id={id} key={id}/>
		))}
	</div>
	
);
	
const mapStateToProps = (state) => 
		({
			categories: state.categories.allIds
		})
			

export default connect(mapStateToProps, null)(RecipeIndex);
