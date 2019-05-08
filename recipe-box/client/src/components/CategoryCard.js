import React, { Component } from 'react';

class CategoryCard extends Component {
	const categories = props.categories
	const listItems = categories.map((category) => 
		<li>{category}</li>
	);
	return (
		<ul>{listItems}</ul>
	)
};

	
	render() {
	
		return (
			<div className='mainComponent'>
				<h1 className='categoryCardTitle'>{category.name}</h1>
			</div>
		)
	}
}

export default CategoryCard;