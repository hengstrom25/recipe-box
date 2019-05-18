import React, { Component } from 'react';
import { BrowserRouter as Router, Link} from 'react-router-dom';
import { connect } from 'react-redux';

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
			<ul>
				{categories.map(category => (
					<li key={category.name}>
						<Link to={`/category/${category.id}`}>{category.name}</Link>
					</li>
				))}
			</ul>
		)
	}
	
	/*componentDidMount() {
		fetch('http://localhost:3001/categories')
			.then(response => response.json())
			.then(data => {
				this.setState({
					categories: data
				})
			})
	}*/

};

const RecipeBox = connect(mapStateToProps, null)(RecipeBoxPresentation);
	/*null to later be replaced by mapDispatchToProps*/

export default RecipeBox