import React from 'react';

class CategorySelector extends React.Component {
	
	renderSelectOptions = (category) => (
		option key={category} value={category}>{category}</option>
	)
	
	render() {
		const { input, label } = this.props;
		return (
			<div>
				{
				<select {...input}>
					<option value="">Select</option>
					{this.props.category.map(this.renderSelectOptions)}
				</select>
			</div>
		)
	}	
}

CategorySelector.propTypes = {
	category: React.PropTypes.array,
  	input: React.PropTypes.object,
  	label: React.PropTypes.string,
}

export default CategorySelector;