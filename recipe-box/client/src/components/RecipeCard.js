import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => 
	({
		recipe: state.recipes.byId[ownProps.id]
	})

class RecipeCardPresentation extends Component {
	constructor(props) {
	super(props)
	
		/*this.state = {
			recipe: {}
		};*/
	}
	render() {
	
		const { recipe } = this.props;
		
		return (
			<div>
				<p>name: {recipe.name}</p>
				<p>recipe: {recipe.recipe_field}</p>
				<p>notes: {recipe.notes}</p>
			</div>
		)
	}
	
	/*componentDidMount() {
		fetch('http://localhost:3001/recipes/' +this.props.id)
			.then(response => response.json())
			.then(data => {
				this.setState({
					recipe: data
				})
			})
	}*/	

};

const RecipeCard = connect(mapStateToProps, null)(RecipeCardPresentation);
	/*null to later be replaced by mapDispatchToProps*/

export default RecipeCard;