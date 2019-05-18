import React, { Component } from 'react';
import { BrowserRouter as Router, Link} from 'react-router-dom';

class RecipeBox extends Component {
	constructor(props) {
	super(props)
	
		this.state = {
			categories: []
		};
	}
	render() {
	
		const { categories } = this.state;
		
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
	
	componentDidMount() {
		fetch('http://localhost:3001/categories')
			.then(response => response.json())
			.then(data => {
				this.setState({
					categories: data
				})
			})
	}

};

export default RecipeBox;

